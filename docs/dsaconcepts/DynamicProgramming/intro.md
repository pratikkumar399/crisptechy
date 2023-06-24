## Dynammic Programming

* Dynamic Programming is a method for solving a complex problem by breaking it down into a collection of simpler subproblems, solving each of those subproblems just once, and storing their solutions using a memory-based data structure (array, map,etc). 
* Each of the subproblem solutions is indexed in some way, typically based on the values of its input parameters, so as to facilitate its lookup. 
* So the next time the same subproblem occurs, instead of recomputing its solution, one simply looks up the previously computed solution, thereby saving computation time at the expense of expenditure in storage space. 
* Each of the subproblem solutions is indexed in some way, typically based on the values of its input parameters, so as to facilitate its lookup. 
* So the next time the same subproblem occurs, instead of recomputing its solution, one simply looks up the previously computed solution.

Patterns in Dynamic Programming : 

* Overlapping Subproblems
* Optimal Substructure

### Overlapping Subproblems

* Like Divide and Conquer, Dynamic Programming combines solutions to sub-problems.
* Dynamic Programming is mainly used when solutions of same subproblems are needed again and again.

### Optimal Substructure

* A given problems has Optimal Substructure Property if optimal solution of the given problem can be obtained by using optimal solutions of its subproblems.
* For example, the Shortest Path problem has following optimal substructure property:
* If a node x lies in the shortest path from a source node u to destination node v then the shortest path from u to v is combination of shortest path from u to x and shortest path from x to v.


### Dynamic Programming vs Divide and Conquer

* Both paradigms (DP and Divide and Conquer) divide the given problem into subproblems and solve subproblems.
* Divide and Conquer : The divide and conquer paradigm does not apply when there are overlapping subproblems as it leads to recomputation of same subproblems again and again.

* Dynamic Programming : Dynamic Programming is mainly used when solutions of same subproblems are needed again and again. In dynamic programming, computed solutions to subproblems are stored in a table so that these don’t have to recomputed. So Dynamic Programming is not useful when there are no common (overlapping) subproblems because there is no point storing the solutions if they are not needed again. For example, Binary Search doesn’t have common subproblems. If we take example of following recursive program for Fibonacci Numbers, there are many subproblems which are solved again and again.


### Dynamic Programming vs Greedy

* Dynamic Programming is mainly an optimization over plain recursion. Wherever we see a recursive solution that has repeated calls for same inputs, we can optimize it using Dynamic Programming. The idea is to simply store the results of subproblems, so that we do not have to re-compute them when needed later. This simple optimization reduces time complexities from exponential to polynomial. For example, if we write simple recursive solution for Fibonacci Numbers, we get exponential time complexity and if we optimize it by storing solutions of subproblems, time complexity reduces to linear.
* On the other hand, greedy algorithms have two properties that a problem must exhibit:

    1. Greedy Choice Property
    2. Optimal Substructure

* If a problem can be solved using Greedy, then it can be solved using Dynamic Programming as well. But Greedy won’t work if Greedy Choice property doesn’t hold. For example, Fractional Knapsack problem can be solved using Greedy, but 0-1 Knapsack cannot be solved using Greedy.
* In fact, Dynamic Programming is an algorithmic paradigm whereas Greedy is a technique (or approach) to solve a problem.
  

### Dynamic Programming vs Memoization

* Memoization (Top Down) : The memoized program for a problem is similar to the recursive version with a small modification that it looks into a lookup table before computing solutions. We initialize a lookup array with all initial values as NIL. Whenever we need solution to a subproblem, we first look into the lookup table. If the precomputed value is there then we return that value, otherwise we calculate the value and put the result in lookup table so that it can be reused later.
* Tabulation (Bottom Up) : The tabulated program for a given problem builds a table in bottom up fashion and returns the last entry from table. For example, for the same Fibonacci number, we first calculate fib(0) then fib(1) then fib(2) then fib(3) and so on. So literally, we are building the solutions of subproblems bottom-up.
* Both Tabulated and Memoized store the solutions of subproblems. In Memoized version, table is filled on demand while in Tabulated version, starting from the first entry, all entries are filled one by one. Unlike the Tabulated version, all entries of the lookup table are not necessarily filled in Memoized version. For example, Memoized solution of the LCS problem doesn’t necessarily fill all entries.




## Dp problem patters

1. 0/1 KnapSack
2. Longest Common Subsequence
3. Longest Increasing Subsequence
4. Matrix Chain Multiplication
5. Kadane's Algo
6. Maximum Sum Increasing Subsequence


 
