print("Welcome to the Daily Expense Tracker!\n")
print("""Menu:
1. Add a new expense
2. View all expenses
3. Calculate total and average expense
4. Clear all expenses
5. Exit""")

loop = True
despesas = []

while(loop):
    choice = int(input())
    match choice:
        case 1:
            despesa = float(input())
            despesas.append(despesa)
            print("Expense added successfully!")
        case 2:
            if len(despesas) > 0:
                print("Your expenses:")
                for i, despesa in enumerate(despesas):
                    print(f"{i+1}. {despesa}")
            else:
                print("No expenses recorded yet.")
        case 3:
            if len(despesas) == 0:
                print("No expenses recorded yet.")
            else:
                total = 0
                for i, despesa in enumerate(despesas):
                    total += despesa
                average = total / (len(despesas))
                print(f"Total expense: {total}")
                print(f"Average expense: {average}")
        case 4:
            despesas = []
            print("All expenses cleared.")
        case 5:
            loop = False
        case _:
            print("Invalid choice. Please try again.")
print("Exiting the Daily Expense Tracker. Goodbye!")