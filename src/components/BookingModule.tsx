import { bookingPagePath } from "@lib/booking";

type BookingModuleProps = {
  title?: string;
  description?: string;
  campaign: string;
  region?: string;
  item?: string;
  back?: string;
};

export default function BookingModule({
  title = "Start your junk removal booking",
  description = "Enter your details with the sponsored booking partner to confirm availability, pricing, and pickup options.",
  campaign,
  region,
  item,
  back,
}: BookingModuleProps) {
  const href = bookingPagePath({ campaign, region, item, back });

  return (
    <section className="booking-module" aria-labelledby="booking-heading">
      <div className="booking-copy">
        <p className="eyebrow">Sponsored booking partner</p>
        <h2 id="booking-heading">{title}</h2>
        <p>{description}</p>
        <p className="booking-disclosure">
          Booking, pricing, service availability, and pickup details are handled by the partner.
        </p>
      </div>

      <div className="booking-actions">
        <a className="button button-primary" href={href}>
          <span className="material-symbols-rounded" aria-hidden="true">
            calendar_month
          </span>
          Book
        </a>
      </div>
    </section>
  );
}
