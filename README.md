[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/1uurLsu5)
# Mergesort

Implement an iterative (no recursive calls) and in-place version of mergesort.
Use the template I've provided in `code.js`. Test your new function; I've
provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`.

Hint: To make merge sort in-place, think about what happens during the merge --
where are elements moved to and from? To make it iterative, think about the
part of the array each recursive call considers.

## Runtime Analysis

Analyse the time complexity of your implementation and give a $\Theta$ bound for
its worst-case runtime. Add your answer, including your reasoning, to this
markdown file.

Answer: The wost case time complexity for this mergesort algorithm would be $\Theta$(n^2 log n).
1. mergesort iterates through the array where the width grows *2 each iteration = logn
2. calculating the mid and right indexes = constant time
3. calling the mergeInPlace function:
4. moving values into the temporary array = n 
5. copying values in the temporary array back into original array = n
6. width is calculated to check the while loop condition = constant time
7. n * n * logn = n^2 log n
8. Overall time complexity = $\Theta$(n^2 log n)


Sources: 
1. Gemini AI
2. WyoCourses Sorting Powerpoint


