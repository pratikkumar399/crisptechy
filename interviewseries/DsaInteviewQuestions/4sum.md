## 4 Sum

```
Problem Statement: Given an array nums of n integers and an integer target, are there elements a, b, c, and d in nums such that a + b + c + d = target? Find all unique quadruplets in the array which gives the sum of target.
```
![Alt text](image-16.png)

Let's do brute force:

Intuition : For each element, we try to find if there is another element that sums up to the target. We can do this by using 2Sum algorithm. We can also use 3Sum algorithm to find 3 elements that sum up to the target. However, this will be O(n^3) time complexity.


Complexity Analysis:

Time complexity : O(n^3). For each element, we try to find its complement by looping through the rest of array which takes O(n^2) time. Therefore, the time complexity is O(n^3).

Space complexity : O(1).

```cpp
class Solution {
public:
    vector<vector<int>> fourSum(vector<int>& nums, int target) {
    vector<vector<int>> result;
    int n = nums.size();
    if (n < 4)
            return result;
    // Sort the input array
    sort(nums.begin(), nums.end());

    for (int a = 0; a < n - 3; ++a) {
        // Skip duplicate values for a
        if (a > 0 && nums[a] == nums[a - 1])
            continue;

        for (int b = a + 1; b < n - 2; ++b) {
            // Skip duplicate values for b
            if (b > a + 1 && nums[b] == nums[b - 1])
                continue;

            int left = b + 1;
            int right = n - 1;

            while (left < right) {
                long long sum = static_cast<long long>(nums[a]) + nums[b] + nums[left] + nums[right];
                if (sum < target) {
                    ++left;
                } else if (sum > target) {
                    --right;
                } else {
                    result.push_back({nums[a], nums[b], nums[left], nums[right]});

                    // Skip duplicate values for left and right
                    while (left < right && nums[left] == nums[left + 1])
                        ++left;
                    while (left < right && nums[right] == nums[right - 1])
                        --right;

                    ++left;
                    --right;
                }
            }
        }
    }

    return result;
    }
};
``` 