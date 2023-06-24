> Problem Statement
>> Given a set of non-negative integers, and a value sum, determine if there is a subset of the given set with sum equal to given sum.


```Subset sum problem is to find subset of elements that are selected from a given set whose sum adds up to a given number K. We are considering the set contains non-negative values. It is assumed that the input set is unique (no duplicates are presented).```


> Example

```
Input: set[] = {3, 34, 4, 12, 5, 2}, sum = 9
Output: True
There is a subset (4, 5) with sum 9.
```

```
Input: set[] = {3, 34, 4, 12, 5, 2}, sum = 30
Output: False
There is no subset that add up to 30.
```

> Approach

```
1. If sum == 0, return true
2. If n == 0, return false
3. If last element is greater than sum, then ignore it
4. Else, check if sum can be obtained by any of the following
    (a) including the last element
    (b) excluding the last element
```

> This question is a varition of 0/1 Knapsack problem where weight is equal to value. In 0/1 Knapsack, we either take an item or don't take it. Here also, we either include an element or exclude it. We return true if we get the sum equal to 0 by including or excluding elements, else we return false. 

> Lets see how we can solve this problem using the approach of the 0/1 KnapSack problem .

Methods to solve this problem: 

1. Recursion (Top-Down)
2. Memoization (Top-Down)
3. Tabulation (Bottom-Up)
4. Space Optimized Tabulation (Bottom-Up)


* Let's look at the recursive approach first 
   
    * We have to make a choice whether to include the last element or not. 
    * If we include the last element, we have to check if the sum can be obtained by including the last element. 
    * If we exclude the last element, we have to check if the sum can be obtained by excluding the last element. 
    * If any of the above two cases return true, we return true. 
    * Else, we return false.

Code 👍

```cpp

bool isSubsetSum(int set[], int n, int sum) 
{ 
    // Base Cases 
    if (sum == 0) 
        return true; 
    if (n == 0) 
        return false; 
  
    // If last element is greater than sum, then ignore it 
    if (set[n - 1] > sum) 
        return isSubsetSum(set, n - 1, sum); 
  
    /* else, check if sum can be obtained by any of the following 
    (a) including the last element 
    (b) excluding the last element */
    return isSubsetSum(set, n - 1, sum) 
           || isSubsetSum(set, n - 1, sum - set[n - 1]); 
} 

```

> Time Complexity: O(2^n) In the worst case, this solution tries two possibilities (whether to include or exclude) for every element.
> Auxiliary Space: O(1) As no extra data structure has been used for storing values.
> Stack Space: O(n) In worst case, n stack frames are pushed in the recursive call stack.


* Now, let's look at the memoization approach. 

    * We create a 2D array dp[n+1][sum+1] to store the results of subproblems. 
    * dp[i][j] will be true if there is a subset of elements from set[0..i] with sum equal to j., otherwise false. 
    * We fill the array row by row and column by column. 
    * Finally, we return dp[n][sum].
  
Code 👍

```cpp

   bool f(int index , int target , vector<int> &arr , vector<vector<int>> &dp){
    if(target == 0) return true; 
    // if we have reached the end of the array and target is not 0 
    if(index == 0) return (arr[0] == target ) ;
    
     
    if(dp[index][target] != -1) return dp[index][target] ;
    // choice to take or not to take
    bool notTake = f(index - 1 , target , arr , dp);
    bool take = false;
    // take only if the current element is less than or equal to the target
    if(arr[index]<=target) take=f(index - 1 , target - arr[index] , arr , dp) ;

    return dp[index][target] = take | notTake ;
} 

```

> Time Complexity: O(sum*n), where sum is the ‘target sum’ and ‘n’ is the size of array.
> Space Complexity: O(sum*n), as the size of 2-D array is sum*n.


* Now, let's look at the tabulation approach. 

    * We create a 2D array dp[n+1][sum+1] to store the results of subproblems. 
    * dp[i][j] will be true if there is a subset of elements from set[0..i] with sum equal to j., otherwise false. 
    * We fill the array row by row and column by column. 
    * Finally, we return dp[n][sum].


Code 👍

```cpp

bool isSubsetSum(int set[], int n, int sum) 
{ 
    // The value of subset[i][j] will be true if there is a  
    // subset of set[0..j-1] with sum equal to i 
    bool subset[n + 1][sum + 1]; 
  
    // If sum is 0, then answer is true 
    for (int i = 0; i <= n; i++) 
        subset[i][0] = true; 
  
    // If sum is not 0 and set is empty, then answer is false 
    for (int i = 1; i <= sum; i++) 
        subset[0][i] = false; 
  
    // Fill the subset table in botton up manner 
    for (int i = 1; i <= n; i++) { 
        for (int j = 1; j <= sum; j++) { 
            if (j < set[i - 1]) 
                subset[i][j] = subset[i - 1][j]; 
            if (j >= set[i - 1]) 
                subset[i][j] = subset[i - 1][j] 
                               || subset[i - 1][j - set[i - 1]]; 
        } 
    } 
  
    /* // uncomment this code to print table 
    for (int i = 0; i <= n; i++) 
    { 
    for (int j = 0; j <= sum; j++) 
        cout<<subset[i][j]<<" "; 
    cout<<endl; 
    } */
  
    return subset[n][sum]; 
} 

``` 

> Time Complexity: O(sum*n), where sum is the ‘target sum’ and ‘n’ is the size of array.
>  Auxiliary Space: O(sum*n), as the size of 2-D array is sum*n.


