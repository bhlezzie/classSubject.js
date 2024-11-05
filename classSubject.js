def collect_user_info():
    print("Please enter the following information:")

    # Collecting the user's name
    name = input("Name: ")

    # Collecting the user's age, and checking if it's a valid number
    while True:
        try:
            age = int(input("Age: "))
            if age <= 0:
                print("Please enter a valid age greater than 0.")
            else:
                break
        except ValueError:
            print("Invalid input! Please enter a valid number for age.")

    # Collecting the user's email
    while True:
        email = input("Email: ")
        if '@' in email and '.' in email:
            break
        else:
            print("Invalid email format! Please enter a valid email.")

    # Collecting the user's phone number
    while True:
        phone_number = input("Phone number (format: xxx-xxx-xxxx): ")
        if len(phone_number) == 12 and phone_number[3] == '-' and phone_number[7] == '-' and phone_number.replace('-', '').isdigit():
            break
        else:
            print("Invalid phone number format! Please use xxx-xxx-xxxx.")

    # Collecting the user's address
    address = input("Address: ")

    # Print the collected information
    print("\nUser Information Summary:")
    print(f"Name: {name}")
    print(f"Age: {age}")
    print(f"Email: {email}")
    print(f"Phone Number: {phone_number}")
    print(f"Address: {address}")

# Call the function to collect and display user info
collect_user_info()
