### Largest subarray with 0 sum

Problem Description: Given an array having both positive and negative integers. The task is to compute the length of the largest subarray with sum 0.

Input: arr[] = {15, -2, 2, -8, 1, 7, 10, 23}; 
Output: 5

Explanation: The largest subarray with 0 sum is -2 2 -8 1 7 

Brute force : 

```cpp

class Solution{
    public : 
    int maxLen(int arr[], int n){
        int max_len = 0;
        for(int i = 0; i < n; i++){
            int curr_sum = 0;
            for(int j = i; j < n; j++){
                curr_sum += arr[j];
                // if curr_sum is 0, then update max_len
                if(curr_sum == 0){
                    max_len = max(max_len, j - i + 1);
                }
            }
        }
        return max_len;
    }
}

```

```
Time complexity : O(n^2)
Space complexity : O(1)

Lets discuss about the optimized approach ->  What we can do is that we can use a hashmap to store the sum and the index of the first occurence of that sum. If we encounter a sum which is already present in the hashmap, then we can update the max_len if the difference between the current index and the index of the first occurence of that sum is greater than the max_len. 


Lets take an example to see how this works : 

arr[] = {15, -2, 2, -8, 1, 7, 10, 23};

sum = 15, index = 0
sum = 13, index = 1
sum = 15, index = 2
sum = 7, index = 3
sum = 8, index = 4
sum = 15, index = 5
sum = 25, index = 6
sum = 48, index = 7

Now, we can see that sum = 15 is repeated at index 5 and index 0. So, we can see that the difference between the current index and the index of the first occurence of that sum is 5 - 0 = 5. So, we can update the max_len to 5. 

```

> Code for the optimized approach : 

```cpp

    class Solution{
        public : 
        int maxLen(int arr[], int n){
            unordered_map<int, int> mp;
            int sum = 0;
            int max_len = 0;
            for(int i = 0; i < n; i++){
                sum += arr[i];
                if(sum == 0){
                    max_len = i + 1;
                }
                else{
                    if(mp.find(sum) != mp.end()){
                        max_len = max(max_len, i - mp[sum]);
                    }
                    // if sum is not present in the map, then insert it at index i
                    else{
                        mp[sum] = i;
                    }
                }
            }
            return max_len;
        }
    }


```

Let's dry run the above code : 

```

arr[] = {15, -2, 2, -8, 1, 7, 10, 23}; 




sum = 15, index = 0
mp[15] = 0

sum = 13, index = 1
mp[13] = 1

sum = 15, index = 2
max_len = max(0, 2 - mp[15]) = max(0, 2 - 0) = max(0, 2) = 2

sum = 7, index = 3
mp[7] = 3

sum = 8, index = 4
mp[8] = 4

sum = 15, index = 5
max_len = max(2, 5 - mp[15]) = max(2, 5 - 0) = max(2, 5) = 5

sum = 25, index = 6
mp[25] = 6

sum = 48, index = 7
mp[48] = 7

max_len = 5 

```

> Time complexity : O(n)
> Space complexity : O(n)