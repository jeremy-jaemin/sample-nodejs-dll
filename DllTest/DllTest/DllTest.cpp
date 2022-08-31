// DllTest.cpp : Defines the exported functions for the DLL.
//

#include "pch.h"
#include "framework.h"
#include "DllTest.h"


DLLTEST_API int factorial(int max)
{
    int i = max;
    int result = 1;

    while (i >= 2) {
        result *= i--;
    }

    return result;
}