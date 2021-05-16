---
title: "Python Notes: Lists"
summary: My notes from "An Informal Introduction to Python"
tags: [python, beginner]
date: 2021-05-15
---

## Lists 

- Similar to arrays in JS or Ruby 

- Access items in a list by index the same way, and list nesting is the same

- Slicing is the same as with strings 

- Add to lists using `append()`
  ```python
  >>> numbers = [1,2,3,4]
  >>> numbers.append(5)
  >>> numbers
  [1, 2, 3, 4, 5]
  >>>
  ```

- Use slice syntax to mutate specific elements of a list 
  ```python
  >>> numbers[1:3] = [7,8]
  >>> numbers
  [1, 7, 8, 4, 5]
  ```

- List comprehensions are a concise way to create new lists. A list comprehension consists of brackets containing an expression followed by a `for` clause, then zero or more `for` and/or `if` clauses. The result is a new list containing the elements that meet the given conditions. 
  ```python 
  >>> [(x, y) for x in [1,2,3] for y in [3,1,4] if x != y]
  [(1, 3), (1, 4), (2, 3), (2, 1), (2, 4), (3, 1), (3, 4)]

  >>> [x**2 for x in range(10)]
  [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]
  ```

- List comprehensions can also be nested/performed on nested lists 
  ```python
  >>> matrix = [
  ... [1,2,3,4],
  ... [5,6,7,8],
  ... [9, 10, 11, 12],
  ... ]
  >>> matrix
  [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]
  >>> [[row[i] for row in matrix] for i in range(4)]
  [[1, 5, 9], [2, 6, 10], [3, 7, 11], [4, 8, 12]]
  ```

- More useful list stuff [here](https://docs.python.org/3/tutorial/datastructures.html)
