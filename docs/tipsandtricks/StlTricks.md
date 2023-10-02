## STL Tricks that can be useful


### 1. How to use `std::vector` as a stack

```cpp
#include<bits/stdc++.h> 
using namespace std ;

int  main(){

    vector<int> v ;
    v.push_back(1) ;
    v.push_back(2) ;
    v.push_back(3) ;
    v.push_back(4) ;
    v.push_back(5) ;

    cout<<"The stack is : "<<endl ;
    while(!v.empty()){
        cout<<v.back()<<" ";
        v.pop_back() ;
    }
    cout<<endl ;
    return 0 ;

}
```

### 2. Sort function with a comparator

```cpp
    vector<int> ans;
    // using a lambda function to sort the vector in descending order``
    sort(ans.begin(),ans.end(),[](int a , int b){
            return b < a;
    });

    // without lambda function
    
    bool compare(int a , int b){
        return b < a ;
    }
    sort(ans.begin(),ans.end(),compare);

```