---
title: "Python Notes: Tuples"
summary: My notes from "An Informal Introduction to Python"
tags: [python, beginner]
date: 2021-05-16
---

## Tuples 

- comma separated, surrounded by parentheses 
- immutable, but can contain mutable objects (like lists)
- can be any length
- access items by index the same way as strings and lists 
- a "singleton" is a tuple with only one element
  ```python
  >>> singleton = "hello",
  >>> singleton
  ('hello',)
  ```
- you can also create empty tuples (but I'm not sure yet why you would?)
- elements in a tuple are most often accessed via "unpacking" (which feels a lot like destructuring)
  ```python
  >>> t = (1,2,3)
  >>> x,y,z = t
  >>> x
  1
  >>> y
  2
  >>> z
  3
  ```


