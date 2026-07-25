# Daily Expense Tracker

A simple, lightweight command-line interface (CLI) application built in Python to help you track your daily spending. This script allows you to log individual expenses, view your transaction history, calculate totals and averages, and clear your data when needed.

## Features

- **Add New Expenses:** Easily log numeric expense values.
- **View History:** Display a numbered list of all recorded expenses.
- **Financial Summary:** Instantly calculate both the **total amount spent** and the **average cost** per expense.
- **Clear Data:** Reset your tracker by wiping all logged expenses out of memory.
- **Interactive Menu:** Simple numerical input navigation powered by Python's modern structural pattern matching (`match-case`).

## Prerequisites

To run this project, you need:
- **Python 3.10** or higher (required for the `match-case` syntax used in the menu).

## How to Run

1. **Clone or download** this repository to your local machine.
2. Save the code in a file named `expense_tracker.py`.
3. Open your terminal or command prompt, navigate to the folder containing the file, and run:

```bash
python expense_tracker.py