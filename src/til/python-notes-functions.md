---
title: "Python Notes: Functions and Loops"
summary: My notes from "An Informal Introduction to Python"
tags: [python, beginner]
date: 2021-05-15
---

## Functions n' Loops n' Stuff 

- You can `else` in a loop apparently? It runs when there is no `break` 
  ```python 
  >>> for n in range(2, 10):
  ...     for x in range(2, n):
  ...         if n % x == 0:
  ...             print(n, 'equals', x, '*', n//x)
  ...             break # break out of this loop, move to the next n
  ...     else:
  ...         # loop fell through without finding a factor
  ...         print(n, 'is a prime number')
  ...
  2 is a prime number
  3 is a prime number
  4 equals 2 * 2
  5 is a prime number
  6 equals 2 * 3
  7 is a prime number
  8 equals 2 * 4
  9 equals 3 * 3
  ```

- `break` and `continue` work the same as in other languages 

- `pass` does nothing and can be used when a statement is required but should have no effect, or can be used as a placeholder while coding, or for creating minimal classes

- Function arguments follow a specific order: `def f(pos1, pos2, /, pos_or_kwd, *, kwd1, kwd2)` 
  - The first two args are positional
  - `/` separates the positional args from other args 
  -  the third arg can be either positional or keyword 
  - `*` separates the keyword only args 
  - `kwd1` and `kwd2` are named keyword-only args
  ```python
  f(some_arg, some_other_arg, / , positional_arg, kwd = "keyword arg", * , kwd1 = 1, kwd2 = 2):
  ... 
  ```

- Add documentation strings to functions with triple quotation marks 
  ```python
  >>> def a_func():
  ...     """Do nothing, but document it.
  ...
  ...     No really, it doesn't do anything.
  ...     """
  ...     pass
  ...
  >>> print(a_func.__doc__)
  Do nothing, but document it.

    No really, it doesn't do anything.
  ```