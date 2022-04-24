// Test Case
// To generate : https://www.bioinformatics.org/sms2/random_dna.html
import { boyermoore, lxcount } from '../algorithm/boyermoore.js';
import { kmp } from '../kmp.js';
import { inputsanitation } from '../sanitation.js';

var inputan = "AACAATGTTCGCCTCCTAGAAACTCAGTCTCCTCCATTCTAAAGGGGGAAACAGTCCCGT"
inputan = inputan + "TGGGGAATTAGCCCTGTAATTTATCGAATACATGGCAGTGGGGGTAATGGGTCGCCCTAT"
inputan = inputan + "AAAAAAGAAGACCACCTCATTTGGGCAATTATGATGCGTGAGCACGCGAACACTGCCGCG"
inputan = inputan + "GGTTCCACTGTGATCTCCGCAACCCACTCTTATCCTAACCCATACCTTGGGTCAGGTGAC"
inputan = inputan + "CGACTCCTCTTTGGTTATCGGGCTAGGGGGTGTGGCATTTCTTTAGTCGCTCATGTTCGG"
inputan = inputan + "AAGCGTCTTACCGTCTTACGGATGCTAACACCTCGGATTCCTGCTGCAAATCGCACGTTC"
inputan = inputan + "CTCAGATGGCCGTTGGATCTTAGTCAGCGCCTACCACGTCCAAAGTTGGGACTAGGGGCC"
inputan = inputan + "AGGATTGGTTAGTCGGTATGGGTATCCCCAGTCTAGCACCTATGTGCTTTCACTGGTTTG"
inputan = inputan + "GTGAAGAATTCAGAGGCAGCGTGGTTAACTGCAGAAAGTAAAACCGAGATTTATGAGAAT"
inputan = inputan + "ACTCTCAAGCGGTCAGTGGAACAGGTCAATCCGAAGGACGCTCCATGCCATAGGGATGGC"
inputan = inputan + "CATGACGACTGTCCCCTCCGGGGAATTACAACGGTCTATTCACGTTGGCTAAAAACTTAA"
inputan = inputan + "AATCGTCGCGTACGTATGGCATTCGGAATGTGGCACCGCGAGCGCGGCTTGTATTTTCTT"
inputan = inputan + "ACAGCAAAACAAATGTCCCTGCTTTTGTGTATAATCCGAGTTCTCAACCATACTAATTGG"
inputan = inputan + "GCATTAGGACCTGCGCGATCGTTTTCGACCTGTGTTGTGTCGGAACACTAAGGCACGAGA"
inputan = inputan + "CGTGACGGCCGGACATCGGCCCATCACTATGCATCGAATCGACCCCTGCGGAAGGCAGCT"
inputan = inputan + "GTCGGGCTTCATCCTCAGGATCAAACTCTAGTCACGCCAGTCGACGTCGGCTAGCACACG"
inputan = inputan + "TACCGGGCCACTCCTTTTCGCCCGTTGTCCACCTGCCCAG"

if (inputsanitation(inputan)) {
    let partial = "GTCGGGCTTCATCCTCAGGATCAAACTCTAGTCACGCCAGTCGACGTCGGCTAGCACACG";
    if (inputsanitation(partial)) {
        console.log(boyermoore(inputan, partial));
        console.log(kmp(inputan, partial));
    }
    else {
        console.log("Rantai DNA partial tidak valid");
    }
}
else {
    console.log("Rantai DNA inputan tidak valid");
}
