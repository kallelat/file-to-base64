import "babel-polyfill";
import { expect } from "chai";
import { fileToBase64 } from "../lib/fileToBase64";

describe("fileToBase64.js", () => {
  it("parse example file", async () => {
    const base64 = fileToBase64("./test/example.file");
    expect(base64).to.equal("dGhpcyBpcyBhbiBleGFtcGxlIGZpbGU=");
  });

  it("file does not exist", async () => {
    expect(() => fileToBase64("nonexistent file")).to.throw(Error);
  });
});
