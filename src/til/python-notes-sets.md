---
title: "Python Notes: Sets"
summary: My notes from "An Informal Introduction to Python"
tags: [python, beginner]
date: 2021-05-16
---

## Sets

- an unordered collection with no duplicate elements 
- declared using curly braces or `set()` 
- seems similar to `Set` in JS 
- uses `-`, `|`, `&`, and `^` to compare sets to each other 
  ```python
    >>> a = set("abracadabra")
    >>> b = set("alacazam")
    >>> a
    {'b', 'r', 'd', 'c', 'a'} # duplicates removed 
    >>> b
    {'z', 'l', 'm', 'c', 'a'} # duplicates removed 
    >>> a - b
    {'b', 'd', 'r'} # letters in present in a but not in b
    >>> a | b
    {'b', 'r', 'd', 'z', 'l', 'm', 'c', 'a'} # letters present in both a or b
    >>> a & b
    {'c', 'a'} # letters in both a and b
    >>> a ^ b
    {'b', 'l', 'r', 'm', 'd', 'z'} # letters present in a and b, but not in both 
  ```
- can use set comprehension similarly to lists 
  ```python 
  >>> a = {x for x in 'abracadabra' if x not in 'abc'}
  >>> a
  {'d', 'r'}
  ```