#include <stdio.h>
#include <stdlib.h>

char get_op(void) {
    char c;
    while ((c = getchar()) == ' ') {} // skip leading spaces
    if (c == '+' || c == '-' || c == '*' || c == '/') {
        return c;
    }
    if (c != '\n') { // handle invalid input
        printf("Invalid operator: %c\n", c);
        exit(EXIT_FAILURE);
    }
    return c; // end of expression
}

float get_num(void) {
    float n;
    scanf("%f", &n);
    return n;
}

float md_sub_exp(float sub_exp) {
    char op = get_op();
    if (op == '+' || op == '-' || op == '\n') {
        ungetc(op, stdin); // push back operator
        return sub_exp;
    }
    float next_num = get_num();
    if (op == '*') {
        return md_sub_exp(sub_exp * next_num);
    } else { // op == '/'
        if (next_num == 0) { // handle division by zero
            printf("Division by zero\n");
            exit(EXIT_FAILURE);
        }
        return md_sub_exp(sub_exp / next_num);
    }
}

float sim_sub_exp(float sub_exp) {
    char op = get_op();
    if (op == '\n') {
        ungetc(op, stdin); // push back operator
        return sub_exp;
    }
    float next_md_exp = md_sub_exp();
    if (op == '+') {
        return sim_sub_exp(sub_exp + next_md_exp);
    } else { // op == '-'
        return sim_sub_exp(sub_exp - next_md_exp);
    }
}

float md_exp(void) {
    float n = get_num();
    return md_sub_exp(n);
}

float sim_exp(void) {
    float m = md_exp();
    return sim_sub_exp(m);
}

int main() {
    char user_choice = 'Y';
    while (user_choice == 'Y') {
        printf("Enter a simple arithmetic expression:\n");
        float result = sim_exp();
        printf("Result: %f\n", result);
        printf("Do you want to continue? (Y/N): ");
        scanf(" %c", &user_choice);
    }
    return 0;
}