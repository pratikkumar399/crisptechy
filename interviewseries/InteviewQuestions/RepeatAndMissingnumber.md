## Repeat and Missing Number Array


### Problem Description
```
You are given a read only array of n integers from 1 to n.

Each integer appears exactly once except A which appears twice and B which is missing.

Return A and B.

Note: Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

Note that in your output A should precede B.
```

Problem link : [Repeat and Missing Number Array](https://www.interviewbit.com/problems/repeat-and-missing-number-array/)

Lets discuss the brute force appraoch , we need to return the repeating and missing number in the array. We can use two loops and check for every element if there is a duplicate element in the array. If we find a duplicate element we can return it. This approach will take O(n^2) time and O(1) space.

Code for brute force approach:

```cpp

// Brute Force Approach
int* repeatedNumber(const int* A, int n1, int *len1) {
    
    int *res = (int *)malloc(2*sizeof(int));
    int i,j;
    for(i=0;i<n1;i++){
        for(j=i+1;j<n1;j++){
            if(A[i]==A[j]){
                res[0]=A[i];
                break;
            }
        }
    }
    int sum = 0;
    for(i=0;i<n1;i++){
        sum+=A[i];
    }
    int sum1 = (n1*(n1+1))/2;
    res[1] = res[0] + sum1 - sum;
    *len1 = 2;
    return res;
}
```

Let's discuss the optimal approach , we can use a hash table to store the elements of the array and then check if the element is already present in the hash table or not. If it is present then we can return it. This approach will take O(n) time and O(n) space.

Code for optimal approach:

```cpp

// Optimal Approach
int* repeatedNumber(const int* A, int n1, int *len1) {
    
    int *res = (int *)malloc(2*sizeof(int));
    int i;
    int *hash = (int *)malloc((n1+1)*sizeof(int));
    for(i=0;i<=n1;i++){
        hash[i]=0;
    }
    for(i=0;i<n1;i++){
        hash[A[i]]++;
    }
    for(i=1;i<=n1;i++){
        if(hash[i]==2){
            res[0]=i;
        }
        if(hash[i]==0){
            res[1]=i;
        }
    }
    *len1 = 2;
    return res;
}
```