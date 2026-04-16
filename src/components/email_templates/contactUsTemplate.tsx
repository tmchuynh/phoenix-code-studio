import { InquiryFormData } from "@/lib/types";

export default function ContactUsTemplate({
  formData,
}: {
  formData: InquiryFormData;
}) {
  const containerStyle = {
    fontFamily: "Arial, sans-serif",
    lineHeight: "1.6",
    color: "#333",
    maxWidth: "600px",
    margin: "0 auto",
    padding: "20px",
  };

  const headerStyle = {
    backgroundColor: "#f8f9fa",
    padding: "20px",
    borderRadius: "8px 8px 0 0",
    borderBottom: "3px solid #007bff",
  };

  const contentStyle = {
    backgroundColor: "#ffffff",
    padding: "20px",
    borderRadius: "0 0 8px 8px",
    border: "1px solid #e9ecef",
  };

  const fieldStyle = {
    marginBottom: "15px",
    padding: "10px",
    backgroundColor: "#f8f9fa",
    borderRadius: "4px",
    border: "1px solid #e9ecef",
  };

  const labelStyle = {
    fontWeight: "bold",
    color: "#495057",
    marginBottom: "5px",
    display: "block",
  };

  const valueStyle = {
    color: "#212529",
    marginTop: "5px",
  };

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <h1
          style={{
            color: "#007bff",
            margin: "0 0 10px 0",
            fontSize: "24px",
            textAlign: "center",
          }}
        >
          New Contact Form Submission
        </h1>
        <p
          style={{
            margin: "0",
            textAlign: "center",
            color: "#6c757d",
          }}
        >
          Phoenix Code Studio
        </p>
      </div>

      <div style={contentStyle}>
        <div style={fieldStyle}>
          <span style={labelStyle}>Name:</span>
          <span style={valueStyle}>
            {formData.firstName} {formData.lastName}
          </span>
        </div>

        <div style={fieldStyle}>
          <span style={labelStyle}>Email:</span>
          <span style={valueStyle}>
            <a href={`mailto:${formData.email}`} style={{ color: "#007bff" }}>
              {formData.email}
            </a>
          </span>
        </div>

        {formData.phoneNumber && (
          <div style={fieldStyle}>
            <span style={labelStyle}>Phone Number:</span>
            <span style={valueStyle}>
              <a
                href={`tel:${formData.phoneNumber}`}
                style={{ color: "#007bff" }}
              >
                {formData.phoneNumber}
              </a>
            </span>
          </div>
        )}

        <div style={fieldStyle}>
          <span style={labelStyle}>Inquiry Type:</span>
          <span style={valueStyle}>
            <span
              style={{
                backgroundColor: "#007bff",
                color: "white",
                padding: "3px 8px",
                borderRadius: "12px",
                fontSize: "12px",
                fontWeight: "bold",
              }}
            >
              {formData.inquiryType}
            </span>
          </span>
        </div>

        <div style={fieldStyle}>
          <span style={labelStyle}>Message:</span>
          <div
            style={{
              ...valueStyle,
              backgroundColor: "#ffffff",
              padding: "15px",
              borderRadius: "4px",
              border: "1px solid #dee2e6",
              marginTop: "10px",
              whiteSpace: "pre-wrap",
              wordBreak: "break-word",
            }}
          >
            {formData.message}
          </div>
        </div>

        <div
          style={{
            marginTop: "20px",
            padding: "15px",
            backgroundColor: "#e7f3ff",
            borderRadius: "4px",
            border: "1px solid #bee5eb",
          }}
        >
          <p
            style={{
              margin: "0",
              fontSize: "14px",
              color: "#0c5460",
              fontWeight: "bold",
            }}
          >
            📧 Please respond to this inquiry within 24 hours
          </p>
        </div>
      </div>

      <div
        style={{
          textAlign: "center",
          marginTop: "20px",
          padding: "10px",
          fontSize: "12px",
          color: "#6c757d",
        }}
      >
        <p style={{ margin: "0" }}>
          This message was sent from the Phoenix Code Studio contact form.
        </p>
        <p style={{ margin: "5px 0 0 0" }}>
          Submitted on: {new Date().toLocaleDateString()} at{" "}
          {new Date().toLocaleTimeString()}
        </p>
      </div>
    </div>
  );
}
