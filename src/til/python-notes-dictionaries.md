---
title: "Python Notes: Dictionaries"
summary: My notes from "An Informal Introduction to Python"
tags: [python, beginner]
date: 2021-05-16
---

## Dictionaries 

- similar to objects in JS and hashes in Ruby 
- syntax is essentially the same as JS objects (`{ key: value, key: value }`)

  ```python 
  >>> dict = {'emi': 5953, 'sam': 7218}
  >>> dict['mom'] = 7217
  >>> dict
  {'emi': 5953, 'sam': 7218, 'mom': 7217}
  >>> dict['emi']
  5953
  >>> del dict['mom']
  >>> dict
  {'emi': 5953, 'sam': 7218}
  >>> dict['mom'] = 5140
  >>> list(dict)
  ['emi', 'sam', 'mom']
  >>> sorted(dict)
  ['emi', 'mom', 'sam']
  >>> 'mom' in dict
  True
  >>> 'dad' in dict
  False
  ```
- can be created through dict comprehension 
  ```python 
  >>> {x: x*5 for x in (3,5,10)}
  {3: 15, 5: 25, 10: 50}
  ```
  