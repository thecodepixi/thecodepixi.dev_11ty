---
title: Easy decrementing iteration in Ruby
tags: ruby
date: 2021-05-17
---

Ruby has a built in method `downto` which allows for easy decrementing when you have a known starting and stopping limit: 

```ruby
=> (5).downto(0).each{ |i| puts i }
5
4
3
2
1
0
=> 5
```

*`downto` returns an `Enumerator` instance.* 