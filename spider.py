# coding: utf-8
import requests
import json
import os

cookies = json.loads(open('./cookies.json', 'r').read())
content = requests.get('https://leetcode.com/api/problems/algorithms/', cookies=cookies).content
data = json.loads(content)

# 先弄个MD出来

github_url = 'https://github.com/maicss/leetcode/blob/master/Algorithms/'


class Question(object):
    def __init__(self, _id, name, url, level, free):
        self.id = f'{_id:03}'
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

# 统计计数用
easy = 0
medium = 0
hard = 0


def level_count(level: str):
    global easy
    global medium
    global hard
    if level == 'Easy':
        easy += 1
    elif level == 'Medium':
        medium += 1
    else:
        hard += 1


# with open('all.json', 'rb') as f:
#     data = json.loads(f.read())
questions = data['stat_status_pairs']
questions.sort(key=lambda x: x['stat']['question_id'])
# 创建Algorithms文件夹
if not os.path.exists(os.getcwd() + '/Algorithms'):
    print('文件夹Algorithms不存在')
    os.mkdir(os.getcwd() + '/Algorithms')
readme_file = os.getcwd() + '/README.MD'
readme_content = ['''# leetcode

## spider usage

 - login to [leetcode](https://leetcode.com/accounts/login/)
 - (Chrome) open `devTools` -> `Application` -> `cookies`, copy `LEETCODE_SESSION` and `csrftoken` key-value, make a json file.
 - run spider with `python(3) spider.py`, you may need install `requests` first.
 - name with delete line means that problem is only for members.

## progress
'''
]
readme_content.append('| ID | Title | Difficulty | JavaScript | Python |')
readme_content.append('|----|----|:----:|:----:|:----:|')
# 创建题目名称的文件夹，和solution文件
for q in questions:
    question = Question(q['stat']['question_id'],
                        q['stat']['question__title_slug'],
                        'https://leetcode.com/problems/' + q['stat']['question__title_slug'] + '/description/',
                        question_level[q['difficulty']['level'] - 1],
                        not q['paid_only'],
                        )
    question.dir = os.getcwd() + '/Algorithms/' + question.id + '.' + question.name
    if not os.path.exists(question.dir):
        os.mkdir(question.dir)
    # 创建文件
    open(question.dir + '/solution.js', 'a')
    open(question.dir + '/solution.py', 'a')
    if question.free:
        single_line = '| %s | [%s](%s) | %s | ' % (question.id, question.name, question.url, question.level)
    else:
        single_line = '| %s | [~~%s~~](%s) | %s | ' % (question.id, question.name, question.url, question.level)
    if os.stat(question.dir + '/solution.js').st_size:
        # 如果不是空文件，就认为是已经搞定了这个题
        js_url = github_url + question.id + '.' + question.name + '/' + 'solution.js'
        # 因为肯定是js方式解决的多，就只统计这个
        level_count(question.level)
        single_line += '[Javascript](' + js_url + ') |'
    else:
        single_line += '-- |'

    if os.stat(question.dir + '/solution.py').st_size:
        py_url = github_url + question.id + '.' + question.name + '/' + 'solution.py'
        single_line += '[Python](' + py_url + ') |'
    else:
        single_line += '-- |'
    readme_content.append(single_line)
readme_content[1:0] = ['> Easy: %d; Medium: %d; Hard: %d; Total: %d\n' % (easy, medium, hard, easy + medium + hard)]
with open('README.MD', 'w') as ff:
    ff.write('\n'.join(readme_content))
