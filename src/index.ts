import QrScanner from 'qr-scanner';
import * as url from "url";
import ScanResult = QrScanner.ScanResult;

window.onload = () => {
  const out = document.getElementById("output");
  const qrScanner = new QrScanner(
    document.getElementById("input"),
    (result: ScanResult) => {
      const u = url.parse(result.data)
      out.innerHTML = url.format(u);
    },
    {
      highlightScanRegion: true,
    },
  );
  // qrScanner.setInversionMode("both");
  qrScanner.start();
};
