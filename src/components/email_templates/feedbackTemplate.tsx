import { FeedbackFormData } from "@/lib/types";

export default function FeedbackTemplate({
  formData,
}: {
  formData: FeedbackFormData;
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
    borderBottom: "3px solid #28a745",
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

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          style={{
            color: i <= rating ? "#ffc107" : "#e9ecef",
            fontSize: "20px",
            marginRight: "2px",
          }}
        >
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <h1
          style={{
            color: "#28a745",
            margin: "0 0 10px 0",
            fontSize: "24px",
            textAlign: "center",
          }}
        >
          New Feedback Submission
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
          <span style={labelStyle}>Website Name:</span>
          <span style={valueStyle}>{formData.websiteName}</span>
        </div>

        <div style={fieldStyle}>
          <span style={labelStyle}>Work Type:</span>
          <span style={valueStyle}>
            <span
              style={{
                backgroundColor: "#28a745",
                color: "white",
                padding: "3px 8px",
                borderRadius: "12px",
                fontSize: "12px",
                fontWeight: "bold",
              }}
            >
              {formData.workType}
            </span>
          </span>
        </div>

        <div style={fieldStyle}>
          <span style={labelStyle}>Rating:</span>
          <div style={valueStyle}>
            {renderStars(formData.rating)}
            <span style={{ marginLeft: "10px", fontSize: "14px" }}>
              ({formData.rating}/5)
            </span>
          </div>
        </div>

        {!formData.isAnonymous && (
          <>
            <div style={fieldStyle}>
              <span style={labelStyle}>Name:</span>
              <span style={valueStyle}>
                {formData.firstName} {formData.lastName}
              </span>
            </div>

            <div style={fieldStyle}>
              <span style={labelStyle}>Email:</span>
              <span style={valueStyle}>
                <a
                  href={`mailto:${formData.email}`}
                  style={{ color: "#28a745" }}
                >
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
                    style={{ color: "#28a745" }}
                  >
                    {formData.phoneNumber}
                  </a>
                </span>
              </div>
            )}
          </>
        )}

        {formData.isAnonymous && (
          <div style={fieldStyle}>
            <span style={labelStyle}>Submission Type:</span>
            <span style={valueStyle}>
              <span
                style={{
                  backgroundColor: "#6c757d",
                  color: "white",
                  padding: "3px 8px",
                  borderRadius: "12px",
                  fontSize: "12px",
                  fontWeight: "bold",
                }}
              >
                Anonymous
              </span>
            </span>
          </div>
        )}

        <div style={fieldStyle}>
          <span style={labelStyle}>Feedback:</span>
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
            {formData.feedback}
          </div>
        </div>

        {formData.tags.length > 0 && (
          <div style={fieldStyle}>
            <span style={labelStyle}>Tags:</span>
            <div style={valueStyle}>
              {formData.tags.map((tag, index) => (
                <span
                  key={index}
                  style={{
                    backgroundColor: "#007bff",
                    color: "white",
                    padding: "2px 6px",
                    borderRadius: "10px",
                    fontSize: "11px",
                    marginRight: "5px",
                    marginBottom: "3px",
                    display: "inline-block",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {formData.customTags && (
          <div style={fieldStyle}>
            <span style={labelStyle}>Custom Tags:</span>
            <span style={valueStyle}>{formData.customTags}</span>
          </div>
        )}

        <div style={fieldStyle}>
          <span style={labelStyle}>Display on Website:</span>
          <span style={valueStyle}>
            <span
              style={{
                backgroundColor: formData.displayOnWebsite
                  ? "#28a745"
                  : "#dc3545",
                color: "white",
                padding: "3px 8px",
                borderRadius: "12px",
                fontSize: "12px",
                fontWeight: "bold",
              }}
            >
              {formData.displayOnWebsite ? "Yes" : "No"}
            </span>
          </span>
        </div>

        <div
          style={{
            marginTop: "20px",
            padding: "15px",
            backgroundColor: "#d4edda",
            borderRadius: "4px",
            border: "1px solid #c3e6cb",
          }}
        >
          <p
            style={{
              margin: "0",
              fontSize: "14px",
              color: "#155724",
              fontWeight: "bold",
            }}
          >
            💡{" "}
            {formData.displayOnWebsite
              ? "This feedback can be displayed on your website"
              : "This feedback is for internal use only"}
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
          This feedback was submitted through the Phoenix Code Studio feedback
          form.
        </p>
        <p style={{ margin: "5px 0 0 0" }}>
          Submitted on: {new Date().toLocaleDateString()} at{" "}
          {new Date().toLocaleTimeString()}
        </p>
      </div>
    </div>
  );
}
