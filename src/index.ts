import fs from 'fs';


function isIPInRange(ranges: string[][], ipsCheck: string[]) {
  const ipToNum = (ip: string): number => {
    //make array with numbers
    let arrayNum: number[] = ip.split('.').map(i => parseInt(i))
    //ip = decimal number
    let result = arrayNum.reduce((prev: number, item: number, index: number) => {
      return prev + item * Math.pow(256, 3 - index);
    }, 0)
    return result;
  }

  ranges.forEach(range => {
    const ip1Num: number = ipToNum(range[0]);
    const ip2Num: number = ipToNum(range[1]);

    ipsCheck.forEach(ipCheck => {

      let ipCheckNum: number = ipToNum(ipCheck);

      if (ipCheckNum >= ip1Num && ipCheckNum <= ip2Num) {
        fs.appendFileSync(`${process.env.PWD}/ban.txt`, `${ipCheck}\n`)
      }
    });
  });
}


const rangesFile: string[][] = fs.readFileSync(`${process.env.PWD}/ranges.txt`, 'utf-8').toString().split(/\r?\n/).map(i => i.split(', '));
const ipsFile: string[] = fs.readFileSync(`${process.env.PWD}/ips.txt`, 'utf-8').toString().split(/\r?\n/);
isIPInRange(rangesFile, ipsFile)

