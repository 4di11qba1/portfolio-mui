function Stats({ count, desc }) {
  return (
    <div>
      <p className="about-stats-head">
        <span>{count}+</span>
        <br /> {desc}
      </p>
    </div>
  );
}

export default Stats;
