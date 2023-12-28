int sum_array(const int a[], int size) {
    int sum = 0;
    const int *p = a; // initialize pointer to first element of array
    const int *end = a + size; // initialize pointer to one past the last element of array

    while (p < end) {
        sum += *p; // add value pointed to by pointer to sum
        p++; // increment pointer to point to next element of array
    }

    return sum;
}