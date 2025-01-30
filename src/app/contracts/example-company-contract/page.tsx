import { Button } from "@/components/ui/button";

const ContractPage = () => {
  return (
    <main className="w-10/12 md:w-11/12 mx-auto py-6">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
        Service Agreement Contract
      </h1>

      <div className="my-6">
        <h2 className="text-3xl font-semibold text-secondary">
          1. Agreement Overview
        </h2>
        <p>
          This Service Agreement ("Agreement") is made and entered into on{" "}
          <strong>[Date]</strong> by and between:
        </p>
        <ul className="list-disc pl-6 space-y-1 text-balance">
          <li>
            <strong>Client Company:</strong> [Client Name]
          </li>
          <li>
            <strong>Service Provider:</strong> [Service Provider Name]
          </li>
        </ul>
      </div>

      <div className="mb-6">
        <h2 className="text-3xl font-semibold text-secondary">
          2. Scope of Work
        </h2>
        <p>The Service Provider agrees to perform the following services:</p>
        <ul className="list-disc ml-8 mt-4 text-lg">
          <li>Provide [specific service or product].</li>
          <li>Deliver the service as per the agreed timeline.</li>
          <li>Ensure quality and compliance with industry standards.</li>
        </ul>
      </div>

      <div className="mb-6">
        <h2 className="text-3xl font-semibold text-secondary">
          3. Terms of Agreement
        </h2>
        <p>
          The Service Provider agrees to the following terms and conditions:
        </p>
        <ul className="list-disc pl-6 space-y-1 text-balance">
          <li>
            <strong>Contract Duration:</strong> [Start Date] to [End Date]
          </li>
          <li>
            <strong>Confidentiality:</strong> Both parties agree to maintain the
            confidentiality of sensitive information.
          </li>
          <li>
            <strong>Termination Clause:</strong> Either party may terminate this
            agreement with [X] days' notice.
          </li>
        </ul>
      </div>

      <div className="mb-6">
        <h2 className="text-3xl font-semibold text-secondary">
          4. Payment Terms
        </h2>
        <p>The Client agrees to pay the Service Provider the following:</p>
        <ul className="list-disc pl-6 space-y-1 text-balance">
          <li>
            <strong>Total Amount:</strong> $[Amount]
          </li>
          <li>
            <strong>Payment Method:</strong> [Method (e.g., bank transfer,
            check, etc.)]
          </li>
          <li>
            <strong>Payment Schedule:</strong> [Payment terms, e.g., 50%
            upfront, 50% on completion]
          </li>
        </ul>
      </div>

      <div className="mb-6">
        <h2 className="text-3xl font-semibold text-secondary">
          5. Additional Terms
        </h2>
        <p>The Service Provider agrees to the following additional terms:</p>
        <ul className="list-disc pl-6 space-y-1 text-balance">
          <li>
            <strong>Warranty:</strong> [Warranty information, if any]
          </li>
          <li>
            <strong>Liability:</strong> [Liability clauses]
          </li>
          <li>
            <strong>Dispute Resolution:</strong> Any disputes will be resolved
            via [arbitration, mediation, etc.].
          </li>
        </ul>
      </div>

      <div className="mt-8 text-center">
        <p>
          By signing below, both parties agree to the terms and conditions
          outlined in this contract.
        </p>
        <div className="flex justify-center gap-12">
          <Button>Client Signature</Button>
          <Button>Service Provider Signature</Button>
        </div>
      </div>
    </main>
  );
};

export default ContractPage;
