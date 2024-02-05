import Link from "next/link";

export default function Box({ randomCharacter }) {
  const { firstName, lastName, email, company, birthday } =
    randomCharacter || {};

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        justifyContent: "center",
      }}
    >
      <h1
        style={{
          alignSelf: "center",
          margin: "20%",
          padding: "20px",
          textAlign: "center",
          border: "3px solid black",
          borderRadius: "20px",
        }}
      >
        {randomCharacter ? (
          <span>
            {firstName} {lastName} works at {company} (email:{" "}
            <Link href={`mailto:${email}`}>{email}</Link>
            ), born on: {birthday}
          </span>
        ) : (
          <span style={{ color: "lightgrey" }}>NOTHING THERE (YET)</span>
        )}
      </h1>
    </div>
  );
}
