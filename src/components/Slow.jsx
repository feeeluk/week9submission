async function delay(timeout) {
    return new Promise((resolve) => {
      setTimeout(resolve, timeout);
    });
  }
  
  export async function SlowComponent() {
    // slow because of a delay, or fetching lots of data over the network or from a database
    await delay(5000);
  
    return (
      <div>
        <p className="text-green-400">
          I&apos;m very slow to load, but here I am at last!
        </p>
      </div>
    );
  }