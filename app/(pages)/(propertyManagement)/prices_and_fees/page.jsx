import Footer from "@/app/components/Footer";
import Hero from "@/app/components/Hero";
import Navbar from "@/app/components/Navbar";
import ScheduleVisit from "@/app/components/ScheduleVisit";
import ShadowBox from "@/app/components/ShadowBox";

export default function page() {
  return (
    <>
      <Navbar />
      <Hero title={"Prices and Fees"} />
      <ShadowBox>
        <table className="table table-bordered table-striped table-hover align-middle text-center">
          <thead className="table-dark">
            <tr>
              <th>Services</th>
              <th>BHI Light Services</th>
              <th>BHI Plus+ Services</th>
              <th>Other Competition</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Fees</td>
              <td>From $95 – $155 + HST</td>
              <td>$119 to $169 + HST</td>
              <td>5 – 12% of rent + HST</td>
            </tr>
            <tr>
              <td>Coordinating maintenance and repairs</td>
              <td>✓</td>
              <td>✓</td>
              <td>✓</td>
            </tr>
            <tr>
              <td>Deposit of monthly rent</td>
              <td>✓</td>
              <td>✓</td>
              <td>✓</td>
            </tr>
            <tr>
              <td>24Hr Emergency Support (In-house)</td>
              <td>✓</td>
              <td>✓</td>
              <td>X</td>
            </tr>
            <tr>
              <td>Move in / out inspections</td>
              <td>✓</td>
              <td>✓</td>
              <td>X</td>
            </tr>
            <tr>
              <td>Fall Inspection</td>
              <td>X</td>
              <td>✓</td>
              <td>X</td>
            </tr>
            <tr>
              <td>Spring Inspection</td>
              <td>X</td>
              <td>✓</td>
              <td>X</td>
            </tr>
            <tr>
              <td>Payment property taxes</td>
              <td>X</td>
              <td>✓</td>
              <td>X</td>
            </tr>
            <tr>
              <td>Monthly payment of utilities</td>
              <td>X</td>
              <td>✓</td>
              <td>X</td>
            </tr>
            <tr>
              <td>Monthly payment of condo fees</td>
              <td>X</td>
              <td>✓</td>
              <td>X</td>
            </tr>
            <tr>
              <td>Connection to paralegal services</td>
              <td>X</td>
              <td>✓</td>
              <td>X</td>
            </tr>
            <tr>
              <td>Preferred contractor pricing</td>
              <td>✓</td>
              <td>✓</td>
              <td>X</td>
            </tr>
            <tr>
              <td>Experienced in Ontario Residential Tenancies Act</td>
              <td>✓</td>
              <td>✓</td>
              <td>✓</td>
            </tr>
            <tr>
              <td>Non-resident CRA tax remittance</td>
              <td>X</td>
              <td>✓</td>
              <td>X</td>
            </tr>
            <tr>
              <td>Monthly and annual expense report</td>
              <td>✓</td>
              <td>✓</td>
              <td>✓</td>
            </tr>
            <tr>
              <td>Experienced vendors &amp; technicians preferred pricing</td>
              <td>✓</td>
              <td>✓</td>
              <td>X</td>
            </tr>
            <tr>
              <td>
                Coordination &amp; processing notice of entry, eviction notices,
                noise complaints
              </td>
              <td>✓</td>
              <td>✓</td>
              <td>X</td>
            </tr>
            <tr>
              <td>Preferred pricing for property insurance</td>
              <td>✓</td>
              <td>✓</td>
              <td>X</td>
            </tr>
          </tbody>
        </table>

        <ScheduleVisit />
      </ShadowBox>
      <Footer />
    </>
  );
}
