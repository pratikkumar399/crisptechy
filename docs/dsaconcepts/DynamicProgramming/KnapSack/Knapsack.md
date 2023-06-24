## 0/1 Knapsack Problem

### Problem Statement

```Given weights and values of n items, put these items in a knapsack of capacity W to get the maximum total value in the knapsack. In other words, given two integer arrays val[0..n-1] and wt[0..n-1] which represent values and weights associated with n items respectively. Also given an integer W which represents knapsack capacity, find out the maximum value subset of val[] such that sum of the weights of this subset is smaller than or equal to W. You cannot break an item, either pick the complete item or don’t pick it (0-1 property).```

### Example

```
Input: 
  val[] = {60, 100, 120};
  wt[] = {10, 20, 30};
  W = 50;

Output: 220

```

### Approach

1. Recursive Approach
2. Memoization Approach 
3. Tabulation Approach 
4. Printing the Items
   

### Code Implementation

1. Recursive Approach
   
   We have some cases in this approach : 

    1. Base Case
    2. If the weight of the item is greater than the capacity of the knapsack then we can't include that item
    3. Else we have two choices either to include the item or not.
    4. If we include the item then we have to reduce the capacity of the knapsack and the number of items.
    5. If we don't include the item then we have to reduce the number of items, because we are not including the item and the capacity of the knapsack remains the same.

```cpp

int knapSack(int wt[], int val[], int W, int n) 
{   
    // Base Case
    // if the items or the capacity of the knapsack is 0 then return 0
    if(n==0 || W==0) return 0;

    // Case 2: 
    // if the weight of the item is greater than the capacity of the knapsack then we can't include that item
    if(wt[n-1]>W) return knapSack(wt,val,W,n-1);

    // Case 3:
    // else we have two choices either to include the item or not
    // if we include the item then we have to reduce the capacity of the knapsack and the number of items
    // if we don't include the item then we have to reduce the number of items
    return max(val[n-1]+knapSack(wt,val,W-wt[n-1],n-1),knapSack(wt,val,W,n-1));
} 

```
Time Complexity : O(2^n) 

Space Complexity : O(n)

> Need for memoization arises due to the fact that the recursive implementation evaluates the same subproblems again and again.

2. Memoization Approach

```cpp

vector<vector<int>> dp(1001,vector<int>(1001,-1));

int knapSack(vector<int> wt , vector<int> val, int capacity, int items){
    if(items==0 || capacity==0) return 0;
    // in case we find that the value is already present in the dp array then we return the value
    if(dp[items][capacity]!=-1) return dp[items][capacity];
    
    int take = val[items-1] + knapSack(wt,val,capacity-wt[items-1],items-1);
    int notTake = knapSack(wt,val,capacity,items-1);

    // storing the value in the dp array
    dp[items][capacity] = max(take,notTake);

    return dp[items][capacity];

}
```
Time Complexity : O(n*capacity)

Space Complexity : O(n*capacity)

3. Tabulation Approach

```cpp

int knapSack(vector<int> wt , vector<int> val, int capacity, int items){
   vector<vector<int>> dp(items+1, vector<int> (capacity+1,0));

   for(int item=1;item<=items;i++){
         for(int cap=1;cap<=capacity;cap++){
              if(wt[item-1]<=cap){
                dp[item][cap] = max(val[item-1]+dp[item-1][cap-wt[item-1]],dp[item-1][cap]);
              }
              else{
                dp[item][cap] = dp[item-1][cap];
              }
         }
   }
}
```
Time Complexity : O(n*capacity)

Space Complexity : O(n*capacity)

4. Priting the items

```cpp  

    int knapSack(vector<int> wt , vector<int> val, int capacity, int items){
    vector<vector<int>> dp(items+1, vector<int> (capacity+1,0));

    for(int item=1;item<=items;i++){
            for(int cap=1;cap<=capacity;cap++){
                if(wt[item-1]<=cap){
                    dp[item][cap] = max(val[item-1]+dp[item-1][cap-wt[item-1]],dp[item-1][cap]);
                }
                else{
                    dp[item][cap] = dp[item-1][cap];
                }
            }
    }

    int i=items,j=capacity;
    vector<int> ans;
    
    // we will traverse the dp array from the last
    // if the value of the dp array at i,j is equal to the value of the dp array at i-1,j then we will not include the item
    // else we will include the item and reduce the capacity of the knapsack and the number of items

    while(i>0 && j>0){
        if(dp[i][j]==dp[i-1][j]){
            i--;
        }
        else{
            ans.push_back(wt[i-1]);
            j = j-wt[i-1];
            i--;
        }
    }
    for(int i=0;i<ans.size();i++){
        cout<<ans[i]<<" ";
    }
    }
```

Questions based on Knapsack Pattern:

1. [Partition Equal Subset Sum](https://leetcode.com/problems/partition-equal-subset-sum/)
2. [Equal Sum Partition](https://leetcode.com/problems/partition-equal-subset-sum/)
3. [Count of Subset Sum](https://leetcode.com/problems/target-sum/) 
4. [Minimum Subset Sum Difference](https://leetcode.com/problems/last-stone-weight-ii/) 
5. [Target Sum](https://leetcode.com/problems/last-stone-weight-ii/) 
6. [Number of Subset with given difference](https://leetcode.com/problems/last-stone-weight-ii/) 

