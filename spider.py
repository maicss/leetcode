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
    def __init__(self, _id, name, url, level, solved, free):
        self.id = _id
        self.name = name
        self.url = url
        self.level = level
        self.free = free
        self.js = False
        self.python = False
        self.solved = solved

    def toString(self):
        print(self.id, self.name, self.url, self.level, self.free, self.solved, self.python, self.js)


question_level = ['Easy', 'Medium', 'Hard']

with open('all.json', 'rb') as f:
    data = json.loads(f.read())
    questions = data['stat_status_pairs']
    questions.sort(key=lambda x: x['stat']['question_id'])
    # 创建Algorithms文件夹
    if os.path.exists(os.getcwd() + '/Algorithms'):
        print('文件夹Algorithms存在')
    else:
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
                            q['status'] == 'ac',
                            q['paid_only'],
                            )
        if not os.path.exists(os.getcwd() + '/' + question.name):
            os.mkdir(os.getcwd() + '/' + question.name)

        open(os.getcwd() + '/' + question.name + '/solution.js', 'a')
        open(os.getcwd() + '/' + question.name + '/solution.py', 'a')

        if os.path.exists(os.getcwd() + '/' + question.name + '/solution.js'):
            open(os.getcwd() + '/' + question.name + '/solution.js', 'a')
        if os.path.exists(os.getcwd() + '/' + question.name + '/solution.py'):
            pass
    # with open(readme_file, 'w') as ff:
    #     ff.write('# leetcode \n')
    #     ff.write('| ID | Title | Difficulty | JavaScript | Python |\n')
    #     ff.write('|----|----|:----:|:----:|:----:|\n')
    #     for q in questions:
    #         question = Question(q['stat']['question_id'],
    #                             q['stat']['question__title_slug'],
    #                             'https://leetcode.com/problems/' + q['stat']['question__title_slug'] + '/description/',
    #                             question_level[q['difficulty']['level'] - 1],
    #                             q['status'] == 'ac',
    #                             q['paid_only'],
    #                             )
    #         if question.solved:
    #             # 默认是js搞定的，
    #             js_url = github_url + question.name + '.js'
    #             py_url = github_url + question.name + '.py'
    #             ff.write('| %d | [%s](%s) | %s | [%s](%s) | [%s](%s) |\n' % (
    #                 question.id, question.name, question.url, question.level, 'Javascript solution', '',
    #                 'Python solution', ''))
    #         else:
    #             ff.write('| %d | [%s](%s) | %s | [%s](%s) | [%s](%s) |\n' % (
    #                 question.id, question.name, question.url, question.level, 'Javascript solution', '',
    #                 'Python solution', ''))
    #     ff.close()
