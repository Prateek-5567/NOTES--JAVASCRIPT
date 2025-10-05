/**
static in C++
1. Static Local Variables

Declared inside a function with static.
*Properties:
    Lifetime: whole program (not destroyed when function exits).
    Scope: local to the function i.e it can still not be accessed outside function.
Initialized only once.

Example:
*/
void fun() {
    static int count = 0;  // persists across calls
    count++;
    cout << count << endl;
}
int main() {
    fun(); // 1
    fun(); // 2
    fun(); // 3
}

// Useful for counters, memoization, caching.
/* 
2. Static Global Variables (File Scope)

If a global variable is declared static, it is restricted to the file (internal linkage).
Cannot be accessed from other .cpp files in the same project. and can not be modified in current file later on.

Example:
*/ 
static int x = 10;  // only visible in this file
/*

3. Static Data Members (Inside a Class)

Shared by all objects of the class (only one copy exists). obj1 ne update kia to  obj2 ke lie bhi update ho jayega.
Must be defined outside the class as well.

Example:
*/
class Test {
public:
    static int count;  // declaration
};
int Test::count = 0;   // definition outside

int main() {
    Test t1, t2;
    Test::count = 5;   // accessed via class
    cout << t1.count << endl; // 5
}

// Use case: tracking number of objects, shared configurations.

/*

4. Static Member Functions

Belong to the class, not to any object.
Can only access static data members (no this pointer).
Called with ClassName::func().

Example: */

class MyClass {
public:
    static int val;
    static void show() {
        cout << val << endl;
    }
};
int MyClass::val = 10;

int main() {
    MyClass::show(); // 10
}
/*
5. Static in Functions (C vs C++)

In C, static at global level = internal linkage.
In C++, same behavior but combined with OOP use cases (static members + functions).

🔑 Key Points to Remember
    Static local → retains value between function calls.
    Static global → restricted visibility to the file (internal linkage).
    Static class data → one copy shared among all objects.
    Static class methods → no this, can only access static data.
    Lifetime of static variables is entire program execution.
*/