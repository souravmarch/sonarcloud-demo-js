async function process1(data) {
  try {
    if (data.length > 0) {
      return data.toUpperCase();
    }
  } catch (e) {
    // ❌ Swallowing errors silently
  }
}

async function process2(data) {
  try {
    if (data.length > 0) {
      return data.toUpperCase(); // ❌ Duplicate code
    }
  } catch (e) {
    // ❌ No logging
  }
}

module.exports = { process1, process2 };
