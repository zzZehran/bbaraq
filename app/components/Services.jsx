import { services } from "@/utils/cardInfo";
import Image from "next/image";

export default function Services() {
  return (
    <div className="container py-2 py-md-5">
      <div className="row gy-5 px-md-5 mt-2 mt-md-3">
        {services.map(({ title, desc, img }) => (
          <div key={title} className="col-md-6 px-0">
            <div className="d-flex flex-column flex-md-row gap-4">
              <div className="flex-shrink-0 d-flex justify-content-center">
                <Image
                  src={img}
                  alt={title}
                  width={320}
                  height={200}
                  className="rounded shadow"
                  style={{ objectFit: "cover" }}
                />
              </div>

              <div>
                <h4 className="fw-semibold text-center text-md-start fs-5 mb-2">
                  {title}
                </h4>
                <p className="text-muted mb-0 d-none d-md-block">{desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
