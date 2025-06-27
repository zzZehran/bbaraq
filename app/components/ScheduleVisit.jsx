import Link from "next/link";

export default function ScheduleVisit() {
  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center mt-4">
        <h6 className="" style={{ fontWeight: "700", fontSize: ".87rem" }}>
          GET IN TOUCH
        </h6>
        <h4 style={{ fontWeight: "700", fontSize: "2.5rem" }}>
          Schedule A Visit
        </h4>
        <Link
          href={"/contact"}
          className="btn bg-dark text-white rounded-pill px-5 py-3 my-2 mb-4 w-50"
        >
          Contact Us
        </Link>
      </div>
    </>
  );
}
