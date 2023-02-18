export const Reservations = () => {
  return (
    <div>
      <h1 className="mt-4 text-center text-4xl font-bold text-sky-500">RESERVATIONS</h1>
      <p className="mt-8 text-center">We offer two 13-course menu options:</p>
      <div className="mt-3 text-center font-semibold">MODERN CALIFORNIA KAISEKI $310</div>
      <div className="text-center font-semibold">VEGETERIAN KAISEKI $310</div>
      <p className="container mx-auto w-1/2 border-b-2 py-4 text-justify text-gray-400">
        Please take note of our new reservation policy with regards to COVID-19. To protect our
        guests and team, we will require proof of identification and COVID-19 vaccination or a
        negative COVID-19 test taken within 72 hours of the reservation time. Guests who are not
        able to provide the documents upon arrival to the restaurant will not be able to join us for
        the evening.
      </p>
      <h2 className="mt-4 text-center text-2xl font-bold text-sky-500">CANCELLATION POLICY</h2>
      <p className="container mx-auto w-1/2 border-b-2 py-4 text-justify text-gray-400">
        All reservation sales are final and non-refundable. You may transfer your reservation to
        another person via Tock. Any day of cancellations or no-shows will be charged the full
        amount of dinner per person. If you do not confirm your reservation by phone, email or SMS,
        we will unfortunately have to cancel your reservation. Reservations made through Tock are
        for are for individual and personal use only and not to be resold for commercial purposes.
        We reserve the right to cancel reservations made for commercial purposes at our discretion.
      </p>
      <div className="container mx-auto py-4 text-center italic text-gray-600">If you have any questions, please email us in advance of making a reservation.</div>
    </div>
  );
};
