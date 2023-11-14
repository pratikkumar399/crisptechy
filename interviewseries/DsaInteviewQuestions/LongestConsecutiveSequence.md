## Longest Consecutive Sequence

Problem Statement: Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.

```
Example 1:

Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

```

Brute Force technique would be to sort the array and then find the longest consecutive sequence. This would take O(nlogn) time complexity.

Let's implement brute force first : 

```cpp

class Solution{
    public:
        int longestConsecutive(vector<int>& nums) {
            if (nums.size() == 0) return 0;
            sort(nums.begin(), nums.end());
            int longestStreak = 1;
            int currentStreak = 1;
            for (int i = 1; i < nums.size(); i++) {
                if (nums[i] != nums[i - 1]) {
                    if (nums[i] == nums[i - 1] + 1) {
                        currentStreak += 1;
                    } else {
                        longestStreak = max(longestStreak, currentStreak);
                        currentStreak = 1;
                    }
                }
            }
            return max(longestStreak, currentStreak);
        }
};

```


Complexity Analysis: 
Time complexity : O(nlgn). 
Space complexity : O(1).

Let's try to do better than this.

Intuition : It turns out that our initial brute force solution was on the right track, but missing a few optimizations necessary to reach O(n) time complexity.

Algorithm :

This optimized algorithm contains only two changes from the brute force approach: the numbers are stored in a HashSet (or Set, in Python) to allow O(1)O(1) lookups, and we only attempt to build sequences from numbers that are not already part of a longer sequence. This is accomplished by first ensuring that the number that would immediately precede the current number in a sequence is not present, as that number would necessarily be part of a longer sequence.

Let's go through the implementation:

```cpp

class Solution {
    public:
        int longestConsecutive(vector<int>& nums) {
            unordered_set<int> num_set;
            for (int num : nums) {
                num_set.insert(num);
            }

            int longestStreak = 0;
            // lets iterate over the set
            for (int num : num_set) {
                // step 1 : check if the number is the start of the sequence
                if (!num_set.count(num - 1)) {
                    // if it is the start of the sequence then we need to find the length of the sequence
                    int currentNum = num;
                    int currentStreak = 1;
                    // lets find the length of the sequence
                    // we will keep on incrementing the currentNum until we find the next number in the sequence
                    while (num_set.count(currentNum + 1)) {
                        currentNum += 1;
                        currentStreak += 1;
                    }

                    longestStreak = max(longestStreak, currentStreak);
                }
            }

            return longestStreak;
        }
};

```