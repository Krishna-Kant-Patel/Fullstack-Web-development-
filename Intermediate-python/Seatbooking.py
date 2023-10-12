class SeatBookingSystem:
    def __init__(self, total_seats):
        self.total_seats = total_seats
        self.available_seats = list(range(1, total_seats + 1))
        self.booked_seats = {}
    
    def book_seat(self, customer_name, seat_number):
        if seat_number in self.available_seats:
            self.available_seats.remove(seat_number)
            self.booked_seats[seat_number] = customer_name
            print(f"Seat {seat_number} booked for {customer_name}")
        else:
            print(f"Seat {seat_number} is already booked.")
    
    def cancel_seat(self, seat_number):
        if seat_number in self.booked_seats:
            customer_name = self.booked_seats.pop(seat_number)
            self.available_seats.append(seat_number)
            print(f"Seat {seat_number} canceled for {customer_name}")
        else:
            print(f"Seat {seat_number} is not booked.")
    
    def recommend_seat(self):
        print("availble seats:- ")
        print(self.available_seats)


booking_system = SeatBookingSystem(100)
booking_system.book_seat("Krishna", 5)
booking_system.book_seat("nitin", 10)
booking_system.cancel_seat(5)
booking_system.book_seat("abhi", 15)
booking_system.recommend_seat()
