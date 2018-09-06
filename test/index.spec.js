const chai = require("chai");
const links = require("../index");
const expect = chai.expect;




  describe("#getLinksFromMd", () => {
    describe("No parameter", () => {
      it("It has no parameter", () => {
          expect(() => {links.getLinksFromMd( )}).to.throw(Error);
      });
    });

    describe("Parameter as a number", () => {
      it("Parameter should be a string", () => {
          expect(() => {links.getLinksFromMd(1)}).to.throw(Error);
      });
    });

    describe("When parameter has no link", () => {
      it("Return an empty array", () => {
        expect(links.getLinksFromMd("text here")).be.an("array");
        expect(links.getLinksFromMd("text here")).be.empty;
      });
    });

    describe("When it has only one link in markdown", () => {
      it("Return an array with an object", () => {
        expect(links.getLinksFromMd("[Laboratoria](https://laboratoria.la)")).to.deep.equal([{href:"https://laboratoria.la", text: "Laboratoria"}]);
      });
    });

    describe("When it has two links in markdown", () => {
      it("Return an array with two objects", () => {
        expect(links.getLinksFromMd("[Laboratoria](https://laboratoria.la), [Google](https://google.com)")).to.deep.equal([{href:"https://laboratoria.la", text: "Laboratoria"}, {href:"https://google.com", text: "Google"}]);
      });
    });

    describe("When it has three links in markdown", () => {
      it("Return an array with three objects", () => {
        expect(links.getLinksFromMd("[Laboratoria](https://laboratoria.la), [Google](https://google.com), [Chai](https://chaijs.com)")).to.deep.equal([{href:"https://laboratoria.la", text: "Laboratoria"}, {href:"https://google.com", text: "Google"}, {href:"https://chaijs.com", text: "Chai"}]);
      });
    });


  });
