## Partition Equal Subset Sum

### Problem Statement
Given an integer array ```nums```, return ```true``` if you can partition the array into two subsets such that the sum of the elements in both subsets is equal or ```false```otherwise.

### Example 1:
```C++
Input: nums = [1,5,11,5]
Output: true
Explanation: The array can be partitioned as [1, 5, 5] and [11].
```
Problem Link : [Partition Equal Subset Sum](https://leetcode.com/problems/partition-equal-subset-sum/)

### Approach

This problem is a variation of the [0/1 Knapsack](https://www.geeksforgeeks.org/0-1-knapsack-problem-dp-10/) problem. In the 0/1 Knapsack problem, we have to either take an item or don't take it. Here also, we either include an element or exclude it. 

We return true if we get the sum equal to 0 by including or excluding elements, else we return false.

Let's see how we can solve this problem using the approach of the 0/1 KnapSack problem.

### Methods to solve this problem:

1. Recursion (Top-Down)
2. Memoization (Top-Down)
3. Tabulation (Bottom-Up)

👍 Lets see the approach we are using to solve this problem , this question is same as the subset problem,
the only variation being that we have to find two subsets with equal sum.

:arrow_forward: The above statement gives us a hint that the sum of the array must be even, if the sum is odd, we can't divide it into two subsets with equal sum.

:arrow_forward:  If the sum is even that means we are back at the subset sum  question with the target sum being sum/2.

:arrow_forward:   Now we have to find a subset with sum = sum/2. If we find such a subset, we return true, else we return false.

 
>Lets see the recursive approach to solve this problem.

### Recursive Approach

```C++
bool subset(vector<int> &arr, int sum, int n){
    if(sum < 0) return false;
    if(sum == 0) return true;
    if(n==0) return (arr[0] == sum);

    bool take = subset(arr, sum-arr[n], n-1);
    bool notTake = subset(arr, sum, n-1);

    return take || notTake;
}