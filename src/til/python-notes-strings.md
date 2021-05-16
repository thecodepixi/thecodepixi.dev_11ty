---
title: "Python Notes: Strings"
summary: My notes from "An Informal Introduction to Python"
tags: [python, beginner]
date: 2021-05-15
---

## Strings 

- Strings can be concatenated using `n * <string>`
  ```python
  >>> 3 * 'un' + 'ium'
  'unununium'
  ```

- Adjacent string literals are auto-concatenated 
  ```python
  >>> 'Py' 'thon'
  'Python' 
  ```

- Slice a string with index ranges, using the `[x:y]` syntax
  ```python 
  >>> word = 'Python'
  >>> word[0:2]
  'Py'
  >>> word[2:5]
  'tho'
  >>>
  ```

- Removing the first or last index slices the portion of the string up to, or from, the given index 
  ```python 
  >>> word[:2]
  'Py'
  >>> word[2:]
  'thon'
  >>>
  ```

- Slice a copy of the full string by leaving out both indexes 
  ```python 
  >>> word[:]
  'Python'
  ```

- Python strings are immutable. Use slicing to alter a string when needed. 
  ```python 
  >>> word[0] = 'J'
  Traceback (most recent call last):
    File "<stdin>", line 1, in <module>
  TypeError: 'str' object does not support item assignment
  >>> 'J' + word[1:]
  'Jython'
  >>> word[:2] + 'py'
  'Pypy'
  ```

- Get a strings length using `len()`
  ```python 
  >>> s = 'supercalifragilisticexpialidocious'
  >>> len(s)
  34
  ```