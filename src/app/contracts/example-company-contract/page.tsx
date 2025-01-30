"use client";

import Highlight from "@/components/Highlighted";
import { Button } from "@/components/ui/button";

const ServiceAgreementPage = () => {
  return (
    <main className="w-10/12 md:w-9/12 mx-auto py-10">
      {/* Title */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary text-center mb-6">
        Service Agreement
      </h1>

      {/* Agreement Date */}
      <p className="text-lg text-center text-secondary mb-10">
        This Service Agreement ("Agreement") is made and entered into as of . .
        . . . . . . . . . . . . . . . . , by and between:
      </p>

      {/* Company Information */}
      <section className="mb-10 space-y-6">
        <p>
          <strong>Company A (Client):</strong> A{" "}
          <strong>[State/Country]</strong> corporation with its principal place
          of business at . . . . . . . . . . . . . . . . . . . . . . . . . .
        </p>
        <p>
          <strong>Company B (Contractor):</strong> A{" "}
          <strong>[State/Country]</strong> corporation with its principal place
          of business at . . . . . . . . . . . . . . . . . . . . . . . . . .
        </p>
      </section>

      {/* Agreement Sections */}
      <section className="space-y-10">
        <div>
          <h2 className="text-2xl font-semibold text-secondary mb-4">
            1. SERVICES
          </h2>
          <p>
            1.1 Contractor agrees to provide the following services to the
            Client:
            <ul>
              <li>
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
              </li>
              <li>
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
              </li>
              <li>
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
              </li>
              <li>
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
              </li>
              <li>
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
              </li>
            </ul>
          </p>
          <p>
            1.2 All services shall be performed professionally and in accordance
            with industry standards.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-secondary mb-4">
            2. COMPENSATION
          </h2>
          <p>
            2.1 The Client agrees to pay the Contractor a total fee of . . . . .
            . . . . . . . . . . . . . . . . . . . . for the services rendered.
          </p>
          <p>
            2.2 Payments shall be made according to the following schedule:{" "}
            <ul className="">
              <li>
                <span>
                  <strong>First Payment: </strong>
                </span>
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
              </li>
              <li>
                <strong>Second Payment: </strong> . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . .
              </li>
              <li>
                <strong>Third Payment: </strong> . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . .
              </li>
              <li>
                <strong>Final Payment: </strong> . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . .
              </li>
            </ul>
          </p>
          <p>
            2.3 Late payments shall accrue interest at a rate of{" "}
            <Highlight>3% per month</Highlight> on any outstanding balance.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-secondary mb-4">
            3. EXPENSES
          </h2>
          <p>
            3.1 The Client shall not be responsible for reimbursing the
            Contractor for any work-related expenses incurred in connection with
            the services provided under this Agreement.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-secondary mb-4">
            4. OWNERSHIP AND INTELLECTUAL PROPERTY
          </h2>
          <p>
            4.1 Contractor shall retain{" "}
            <Highlight>complete ownership</Highlight> of all work product,
            including but not limited to intellectual property, copyrights,
            trademarks, trade secrets, and patents developed under this
            Agreement.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-secondary mb-4">
            5. CONFIDENTIALITY
          </h2>
          <p>
            5.1 The Contractor shall keep all confidential information received
            from the Client strictly confidential.
          </p>
          <p>
            5.2 This duty of confidentiality shall remain{" "}
            <Highlight>indefinite</Highlight> and shall not be terminated upon
            the conclusion of this Agreement.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-secondary mb-4">
            6. TERM AND TERMINATION
          </h2>
          <p>
            6.1 This Agreement shall commence on{" "}
            <strong>. . . . . . . . . . . . . . . . . </strong> and continue
            until the completion of the project.
          </p>
          <p>
            6.2{" "}
            <Highlight>
              Neither party may terminate this Agreement early
            </Highlight>{" "}
            except in the case of a material breach, fraud, or mutual written
            agreement.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-secondary mb-4">
            7. LIABILITY AND INDEMNIFICATION
          </h2>
          <p>
            7.1 The Contractor shall not be liable for any indirect, incidental,
            or consequential damages arising from the services provided.
          </p>
          <p>
            7.2 The Client agrees to indemnify and hold the Contractor harmless
            from any third-party claims arising from the use of the services.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-secondary mb-4">
            8. GENERAL PROVISIONS
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Governing Law:</strong> This Agreement shall be governed
              by the laws of <Highlight>California</Highlight>.
            </li>
            <li>
              <strong>Entire Agreement:</strong> This Agreement constitutes the
              entire understanding between the parties and supersedes all prior
              agreements.
            </li>
            <li>
              <strong>Amendments:</strong> Any modifications must be in writing
              and signed by both parties.
            </li>
            <li>
              <strong>Severability:</strong> If any provision of this Agreement
              is found to be invalid, the remainder of the Agreement shall
              remain in full force and effect.
            </li>
          </ul>
        </div>
      </section>

      {/* Signature Section */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-secondary mb-6">
          IN WITNESS WHEREOF, the parties hereto have executed this Agreement as
          of the Effective Date.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8">
          {/* Client Signature */}
          <div className="border border-muted p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Company A (Client)</h3>
            <p className="text-sm mb-6">
              Signature: . . . . . . . . . . . . . . . . . . . . . . . . .{" "}
            </p>
            <p className="text-sm">
              Name: . . . . . . . . . . . . . . . . . . . . . . . . . . . .{" "}
            </p>
            <p className="text-sm">
              Title: . . . . . . . . . . . . . . . . . . . . . . . . . . . .{" "}
            </p>
            <p className="text-sm">
              Date: . . . . . . . . . . . . . . . . . . . . . . . . . . . .{" "}
            </p>
          </div>

          {/* Contractor Signature */}
          <div className="border border-muted p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">
              Company B (Contractor)
            </h3>
            <p className="text-sm mb-6">
              Signature: . . . . . . . . . . . . . . . . . . . . . . . . .{" "}
            </p>
            <p className="text-sm">
              Name: . . . . . . . . . . . . . . . . . . . . . . . . . . . .{" "}
            </p>
            <p className="text-sm">
              Title: . . . . . . . . . . . . . . . . . . . . . . . . . . . .{" "}
            </p>
            <p className="text-sm">
              Date: . . . . . . . . . . . . . . . . . . . . . . . . . . . .{" "}
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Button */}
      <section className="text-center mt-12">
        <Button variant={"outline"} className="px-6 py-3 text-lg">
          Download Agreement
        </Button>
      </section>
    </main>
  );
};

export default ServiceAgreementPage;
