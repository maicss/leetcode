# coding: utf-8
import requests

import requests
import json
import os

# cookies = json.loads(open('./cookies.json', 'r').read())
# content = requests.get('https://leetcode.com/api/problems/algorithms/', cookies=cookies).content
# data = json.loads(content)
# print(data['user_name'])

# 先弄个MD出来

github_url = 'https://github.com/maicss/leetcode/blob/master/Algorithms/'


class Question(object):
    def __init__(self, _id, name, url, level, free):
        self.id = f'{_id: 04}'
        self.name = name
        self.url = url
        self.level = level
        self.free = free
        self.js = False
        self.python = False
        self.dir = ''

    def toString(self):
        print(self.id, self.name, self.url, self.level, self.free, self.python, self.js)


question_level = ['Easy', 'Medium', 'Hard']

with open('all.json', 'rb') as f:
    data = json.loads(f.read())
    questions = data['stat_status_pairs']
    questions.sort(key=lambda x: x['stat']['question_id'])
    # 创建Algorithms文件夹
    if not os.path.exists(os.getcwd() + '/Algorithms'):
        print('文件夹Algorithms不存在')
        os.mkdir(os.getcwd() + '/Algorithms')
    readme_file = os.getcwd() + '/README.MD'
    readme_content = '# leetcode \n'
    readme_content += '| ID | Title | Difficulty | JavaScript | Python |\n'
    readme_content += '|----|----|:----:|:----:|:----:|\n'
    # 创建题目名称的文件夹，和solution文件
    for q in questions:
        question = Question(q['stat']['question_id'],
                            q['stat']['question__title_slug'],
                            'https://leetcode.com/problems/' + q['stat']['question__title_slug'] + '/description/',
                            question_level[q['difficulty']['level'] - 1],
                            q['paid_only'],
                            )
        question.dir = os.getcwd() + '/Algorithms/' + question.id + '. ' + question.name
        if not os.path.exists(question.dir):
            os.mkdir(question.dir)
        # 创建文件
        open(question.dir + '/solution.js', 'a')
        open(question.dir + '/solution.py', 'a')
        readme_content += '| %s | [%s](%s) | %s | ' % (question.id, question.name, question.url, question.level)

        if os.stat(question.dir + '/solution.js').st_size:
            js_url = github_url + question.name + '.js'
            # 如果不是空文件，就认为是已经搞定了这个题
            readme_content += '[Javascript](' + js_url + ') |'
        else:
            readme_content += '-- |'

        if os.stat(question.dir + '/solution.py').st_size:
            py_url = github_url + question.name + '.py'
            readme_content += '[Python](' + py_url + ') |'
        else:
            readme_content += '-- |'
        readme_content += '\n'
    with open('README.MD', 'w') as ff:
        ff.write(readme_content)
