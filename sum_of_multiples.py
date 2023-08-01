def sum_of_multiples():
    """
    This function calculates the sum of the first ten multiples of five.
    """
    sum = 0
    for i in range(1, 11):
        sum += i * 5
    return sum

if __name__ == "__main__":
    print(sum_of_multiples())