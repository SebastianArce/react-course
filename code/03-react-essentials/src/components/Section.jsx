export default function Section({ title, children, ...props }) {
  // the ...props will collect all the props that are not destructured
  return (
    <section {...props}>
      <h2>{title}</h2>
      {children}
    </section>
  );
  // and then the ...props will spread all the props that are not destructured
}
