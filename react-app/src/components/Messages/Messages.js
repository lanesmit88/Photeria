import React from "react";
import TypeMessage from "./TypeMessage";
import "./Messages.css";
import AllMessages from "./AllMessages/AllMessages";
const imageName =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExIWFhUVGBcVFhUYFRYXFxYVFRUXFxgXGBYZHSggGhomGxYVITEhJSkrLi4uGB8zODMtNygtLisBCgoKDg0OGhAQFy0dHSUtLS0tLS0tLS0tLS0tLS0tLSstKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rLS0tLS0tLf/AABEIARMAtwMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAADBAIFBgABB//EAD0QAAEDAgQEBAQFAgUDBQAAAAEAAhEDIQQSMUEFUWFxIoGRoQYTMrFCUsHh8NHxFCNicoIVkqIHM0Oywv/EABkBAQEBAQEBAAAAAAAAAAAAAAEAAgMEBf/EACYRAQEAAgICAQIHAQAAAAAAAAABAhEDEiExQRNRBCIyM2GRsXH/2gAMAwEAAhEDEQA/AEwiNUGhEa1dnlEajNQmNTDGoMTYEdjVFjE3RpIadTppqnTUqVJNMpKakQZSRWUkZlNHZTQ1oFtFe/ITQYvcqDok6ihOoqxLUNzFDSrfSQXU1ZVGpd9NI0r3MQXBO1GJWq1LNAKG5FcEJxUAKiA9qYeUB5SKWeuUnrxTILEdjUuwpukpJtaj02r2m0JmmwKbjqTE/RYoUaacpsQ1InTCZYFCm1MUwhpNjUUNXjSpoLoXFq5cSpPMqg4Ii8yKRd9NBexPZFF1NS0rKlNKVaStn0krUpJZsVVSklajVZ1mKvrNSzSb0F5RaqVqOSzQ6hXqXqvXJZTZCZpkJGmU1SchH6SeoBIUCrHDkIbhyk1N0mpekU3TchuDU2o7WoTHIgchoULpQ867MpJ516CoAojSpPQ0qbWFRzr0VVJLKVxaVwrLx1VSQfSSlViZfUKXc8qROtSVbiaStK7lW4lMZqprhJVQnq6Rqlac6Ve1cvXleJZK0ynqAVXgqpc0GIJAMcuitMOpLCgFZYcJDDtVlQYstw3SCaphApBNMCG4I1Fa1QaphTUTAUg1QleyhCABehCldnUhpXkoBqLw1VIfMuzJY1FHOpbHe9AqVEN70F70h5Weq/EFM1HJSs5LNVuIVfWKscQVW10udK1HLkOoVyQhw/BtY0NboPNW2HYlcMyQCCFZ4eh1QYZoBP0kvRoJtlEobhimUdj0s1hRBKGjQepB6VDivc6iazrg9K/MXvzFI18xeZ0AOUwpJOQyVIhQI6KTwuXhevHN6KBlQeuchOKnB5IT2pATylKqaeEpXeFCk6yrsQ5N13yq/EhLFJVnr1Aqlclk7wVuVoaAMjWiDJmdxlOkdzqrOtxBjHNp52tqPDsmYEjwgkkxoPO6yvCMcGNdVeSAS1pAEic0B7SLkGTI19k1xT/Nc2pT8ZY7IQ15Diwth7bbeJpI1uUGVtuH4kumWZY0uDNhOlxeRB/YWLaoWU4ZWqtYGuaJkyWiARmOUxt4YVk9lQi1lab7LsVxzUmYkHS/a6ylRtfSHEdjCsuDVQ0w4Og73t2hWlMl0K5/I70RG4i0wrDC02m4cT3Uq/CqT9WweYsVlvVLUq7SjAt6Lx3BKe09yT/VR/6UBqJ5GdFHykaQXoornUMsQUdjukoRc0VB1A81DH4rICcptfZU7vidg0Y93aP6pFsi0LSF2VZ0/GFM2fReL7EaT1i8Jul8WYWLueOhYT9p0TqjtPuu20JUjg5S2F41QcMzarSDG9782m4RqvGqTRd/YbnyQdwGtw8JGrw0cyvcR8RmTFKR/uj9FWV+MZ3SHZBpBGnnoU+WbYLV4e3qqvG4ADn6yi4vH1bAFhndpH2lJ4jFVhOZjSOc/wBEs2xX18KFy6rjebfQrxLLLcIpDM05xMtttE3Eg/cReLK/xGEpUhVfTe1tV+RxOYgtaXjMW2LSTuOuwSWC4AMgc4Eg5XEE+hkefqpHgjpFy9rR+J0HxEl0gtg2yiJ91kLDg+IqAF2YBpNmNEAEfUdBcmbe6u6PFXxa9yJ6ix9D9knRLH1chktc10QC1wLfxZwNwbdvJaLhzcPSptY2kCGiJdcu6kp2ZP5JuxFYtzSY9pUGYh7uhG/7KwxuDDmhtNxA1yOOnZ380S4ouaQInn3U00PBcZZocCJ5/dXwaVkMBUl2XkPQhXmAxzssuBEQFmumNNvxMGN0vU4swODTqfTt3XvEaWYZhY6yqghodmdc7Hqg2r1mIa7ZGawbKnwVQmeqdo1jngaKUruJ4c5SQsO3hTqj/wAUTrBmF9JLJCpKuDDHOLjqNRaEyjLHbI4/4ff9OvJxmb7IFX4ZLS2HXJAcDeJ5FbahTc5pAM73/ogcPwLnHM7UOuO3JPZjpFRT4aGNy5WgjcazzQ24AtdmN+fmtW7h99dUn/0zKZnujbXVXN4WHNE68psFzeAs1IuFcCmEZwACtnUZPE8Am86ad/6JDEcLc1uv7SthXss38Rccp0ARINSAQy+hI1I0snbNkjPvwLWHxEXsJ3OvnuuWT4/xd2JfJGVrQIZJImLn19lyduW2no8VLqZGW+UnPBc1hB/+Rrbxba9jpCTxFWk6iX/OMNhob8prnEg5nEF31g2vYBrSCZWd4Zj2szSPE4EGpMu8VtJExzhDFVhduwRFhI1mwsTvqeQWaOzQ1uKy4OoCGvljmAeJ7qZL4zZSAXMqOseWxWm4WGhoL3OzOALg5xIaQNNALRrv6LMP42GtDcrBlgRD5ggxLr3iD2B5hHwfFqbxJdkIF8xga6DnYTokyts3EUhH+Y2eU8kU42iCCX2OpEmOqxDcXSL8rH5nE6AHeN/NOCm4GIKj2aOjxWm6p+IRoYAGpEkC8xCtH8XYGFo+qedpJtKx9N4bq3xf266qLTN766c+atHtW3/6jUFM+FsRAmZ0WTxnFajpghvQfyU0/iH0xIbG97juq2vRcSXHe82Guqosrs7hOMODYPlf3Vhw3jh0tJPaJKo3YU2A8zt06KWC8Dwbax6mFCZV9Rw1eW9d0ljfEO2qzzPiFrDHNunUCyqeLfFjsp+WMpIEHWOZ7o063ONpRxTWNJtIE+STocXmJaRMkWPNfPaHFah+Y4kkvLfFIFh80mDoYLh2supYupky57ljGjxG0OeZEc2mFaY+o+k0+JZgYN4sFVVeLOkgmFjRjqhgtfdpMGDqZBnmFLE8QdlzufqIPIydQNpHVWleRsqeLN9+W653HKYd8pzwHiJBB3Ftuqwz+NEullRw2gHKAN7zPVUuI4mTWL8znb+LeNJ5j9Ej6jafEvxLlmnSd4wYcYtbYTusTxXG/MLnu+p1zdK4vFlxLuZJvA1MqvxD1M3LZeo+SuQ3rxRHNUuEQJ1m8201MWBPqjvoOjMG5sokgz4RYCRPOeeqVpvymZF9b8zEp8Yh7oykkkFp5ARB0sLHU/2HK72rQ86T5KYf5qyxHD25A+NXEC4vDZ269dIStXBZWF2bQxEddJnb9VQzPFCliCDN+cz19k9UxrnAS9xjSSf5KrKDXHQW57J1tFw8QsQQZzD7zZJvirVuPcXtqZjuA8tm1tADBNyPNbrB0aVRoJN3CWntYmJ7eoXyxrS2J0tvpyT1HilVhDmPdmgtzZtGlsQJ0/tyUZWm4jxoMrhjQ17GgyQ8DQSYJME/2VhX4hTytDfEB+IaEXm/qvnVWpLplO4evFwdt1Dda2lxKM14EwB/PugjFBsb8tNJ1hZ//F5rA6x5LnSTMqW1ziOIyRawFkp/iCXcxAnSyqn4lwdPLT+yn/iibTYchGuyltoWEHwtMujNf27KBgTL9JtvsCZPf2VG2vl8WYzt56RtzUDW1kmCodtrZ3Ejlyhv/IkaT91W4msSALQLdj1QC8k3NhvzjlKkxombX2i581C3SLHfyENxi4nz/om6lN03MD7Dkkq7HDcxaDp7KGwaw3B9kBx31Uy6DA/ul6hM3U6RB7yuUHFeIbkNUaZMCYnqPfl36p1mGsct5sbAXNxGpEXH90qyoWjTfl09tUy10w8acgHWImL6a31Q45WmKGMeySABAyiY2gwD0kEDpuowPl5i4SZDmjadJGpNtdF5VwL3Oe4Dw/VGb82lj9kBuFe0nwExEwM0feD052SJJ8JupFrRBnTTl2UKdQ3Ewp1MRtcxBmOfrzChnDrk+gv2hJ8/LwS03Mxcb3/kotOttAjcafZQFRpF7feFZcL4BUqjNma1hm5BLjBg+HlM7jRR1tWmi6dv25rrXjUardYL4GY9hcKzg4GBIGUxrI1HqVScW+F6tElzqZyD8VPxtPV1pb3IVs2We1BTfvKbpuBBIN+U/YRdTA303/N9vJccQGHqbmd+3Lf1Uzvfoqym5x0FuZhMHDgNmb+8jf8AZDxdcugjc2AF/Ln+yI6k6QXHKdQDqdr35qQTqDyIjptBP+lSyeCCL32FztBF/wCekQH5tNBNp00nohxUe4Ma1xJ2Ak+23VSRZmH9Dr6Fc2oc33mdloMJ8P6OquIj8DTc/wC536D1VxV+EcPVaHsLqZInXO2YvLXGdeTgrbUwtYGtVJOtvVTFe0Gb9JPqVeY34PrMJJBqN2NIXHdp8XoD3Q6GFaPC1sHnE36k31soZeFDUqzb7IRd/NVo6uDjV2nYDSbdUKqxpMkiLdj2M3Kme8nwzVRcrqvhmRNjPr6LkabnLNFKQ2DhBJ2MjbzkJiiWh8GYsBBOsa21vtbfyRpPJsPT9f5zTNN0GCRB1i+gJG/bRTNi2w1S2UEgwREXBAGaSROg0HPovSRmEkEFtwzVp30uLET2jZJ0B4YtGo2cJtfnp/JTnzHMJaWz4QIgeIAyA4a2k9boc9apmq0hhc1xJgWyuPiMuymRr4STeLWStTCtLWkNaAdCDBECYM6mZ2vICG7iL7AZSAIBcBIkf36iUSrTYfl5ZvDSLZSSRJse3qozx4aj4Z4RSbWpuNMZpDiXQ7LAzQ3YaQTc3N9k7jqjfmvyNDWBxADQABFjAHMyfNBweIyZnchA7k/0BUcHTzOa3ckD3v8Aqp6Z4mmswDMlFtrxJ7uTdCoDAkztO/Yix8kKtUygXi8TtGl528whsbsRrseg3t4t9n3U6lOL/CGGxEnL8qob52QJPNzNHex6r558RfCFfDXIztJA+YPojqIlh0152lfWKbttdbE2EH2I7jsnaZDvCRINiHX11F9exgq2zcJXxbDYcspiGuJ7GOmnlboqxzarnGWnP9VhBEySemi+lfF/AfkAV6Tc7CchpGXQXGA1t/pJsBsXRpAE+HcH+SwZ7v1DbHJ0nc9TZO3nmGXbWmd4Twms5rXVSW2iPxka+Q7yrFtKnTBDGgA3cbR3LjqU9iquuh6bfv7BVOJeT3vzH6CBp+XTUqdJjMQ61XxAX9x7fqYF1c8BqSwt/KfY3HvKzVXpeDIF/WI9wPNW3w/XirGz2+4v9pRTL5aik1ZD4xohtdzr+NoPQkAtPc2WxorPfHtAmmx4mxLDHJwnyEt1RDzTeDL0qdNwExl1c6S1rb7DWbxy/RbGmi2MomIN3G4PKQBCTqh0XzW05D+WVfBOs7ehWnkkv3PvxTZMAibgaC0SLQTruV6q+tfT+XXJPUiwc+yYpslzB31tsUBxmw/of7KbLEaTz5aodatcMyHEFxs0PkXgRfToJhWQrsD752loIOawiQbiJk2t0VNRqw2zi4858wRa3JGEBgu4kzIkakbkbCynHL2tKFRrnZmNEtgEgCMxdM3sRA5borGtLmkatuYAGmkxbWNOSzgqw2cxBM25C1x5n2KtOGVS57pOkTYC57dlGY3tF+13haPzEk9mgD7kq64Ayak/lBPmbD9VRNMuj8rQPM+I/daf4fpw0u/MfYfvKnpntZV6niHl0Ot4Njy0J7ItDpv+HSZF8wjpu0pJjwST1MxfUgXDekfU06ao9PSbQDNtAedgRM9GodDzX9dLSTvMRM2ttI/27ImYX0EWjkDFrxHaAOhS7Xn9J9oBnoNHeWy579uWvTptE/8AGesqJfj/ABc0qYgz46YuJj/MbP6xyISmIxucT/Od/wCR6yqj4wd4B/vZ7Pb+39BZdg3y3XbfQaX/AJ6g62mLl5ExLva5vz3nY2ibTzKr3tPYDcxHl66gDuU7WqAaXOsnadwNu5juVWYioTf0/YRfyB7pZoFYtGvi57NMW/5H1NlLB4jK5r9MpEiCLbi99Cgvdc894JPrF47kdkGgdRtrb30Ee5UH0ekUHj1EPw9QHYZv+2/2lLcExGakw7gQe7bfpKtWiQRzELDr7mnyfEYmGHJIB69eqqKlXKMobNom/srXidHI9zPylwuZ35Rukn4cFoN80N5Xkd1vbxySKtlYjquTLaPMgXj+xEyuUbcSNLr1U6rySSByHIclAU+57Jg2EeyjalhqwAt/NbhHFVsEE+Exmi1429PdJ0XBxhsDe4nTZN1CLOjXUARe+49OambrZqll+oDwxFnRBuJ7QRryCseH4cAmIAcREbDS53VNRqNFtALWva1/1hXOEdDZGzbdzYe5CjhPzLDDOmXcyT5E29oWxwwyUmiQIAE21PfqVleGUZc1u0j0H7BamvVgDrbePUAx5or0YuYZAncWk6QCDAdMW5O0TLXQRztEzM30zdzo4+6SoP0ImNTBnfcskExGrUxRda2kbRGpmcgI56tU1DrTHcjqCZ0nR2o/1WCjUeB2HllmLW05/h7HReN0PLS0ESYGglttLtGihUfoee/O8wDPQWa7yUWZ+Kj4P+TLcoe23TXS3YTcGFf4f5MC062jTaOY0R/ib6J/1NnuHj+RA3sN1aBsOe1uX8/duiXO+xahuPUW3nUW9wP+SUqPETtr015zE23ceyLUfpyJmbHQC8mx/wDIoD6ZO1xEEk+cEyY7AKBas4wBtYCYg9BIA9G8kGYcJ7CZn1dc7aAI7g0G7pPJoM25xLjtqUA1AJDQB7k9SG39SoNR8KV7PZyIcPOx+w9VpqZWE4FiMtZh2d4T/wAtPeFuKRWa64Xw+cfGgyYtxgw4NfO0HwntcFUjXS117drarY/+o+CBFKpE3NM+cOH/ANXeqwv025naeiY4Z4+a9qVIEfp7Lko95mfuuSz1iDTZeF55KAXrSo6FoRPkB5J+kzN4s2ut/SdbdEph37EW8oRgy2salsnvz/lkueXsX5RDiW6+RHWTNuw5q6w4sOpHoL/cNVPSZJFiRzBMA6zp3tKu6Q07T6mP/wAob417wJniJ5D3P9irOq6Xf7REi5nXVpzgx0KV4MyKc/mJPkLfovHPzHnrydG/0nK4eXPqp3OMvvJ8nEX/AONTb1CaY6Ym5Ox1BEzAdlfuN90ix8EAn8UAE79qovFjIPZMtdYCIBkR9IM7Q4FpEdeeyDDvf0iDp/qh+x0J0UhVgmwkxI1OwvYO8yChNPYN05DUmQPEw2vtovKrrchsLZY5SSWTPItKipPiQNNKR/ptM2D2/SdwNOnRV7LevQ3B85OnM9ArH4h/9t3kev1gCZvtqZ6HZVrzc9PtG99NNSAlivXVImB4ucSeekyPMhK1ahN5tveQO+Ux6kqdQwL6dQIGmkw2OwKWqkmPQHUac3QL6WG6gG4+Y5aiBY/TDR5koJG0yNCNdvyt8PrKI6/UbTcSBOroaN9AhOvr4rf7hrzMNCgLh6h21aelouNLBfRMHWzNa4aOAPqJXzai+8TtzmLDYDKLLafC+IzUsu7CR5G4+59EVvEz8WYX5mFqiLtGcc5Ze3kCvlBcTyPRfbC0EQdDY9ivkdbhZZUfTgk03EZZiQJgz2g+ao5816+VO9szaPsvU5VoHNIBsLecdlyXPtsh8m/OO8L0Uenb+ygagFkbD1hp/f1HVKu5ERhz+UnWR+yPTptAMidokevT0UiWi+WG9Jnlp56/dc14tE9jcDWdDO/RTFytN4N0ka8wDIAEe+91at19vMQPuFXcOb4tLWvzGpKtsAyXtnnJ8r/dDtxz8rRTlZAvAA0J6aC6DTqAiJmLZSQY1/BUg890LFOJAETv9Oa46SDOuij83WCddM1455aoEG3PcqdKdD8ognL6s9n5m+h+6ZomDoRMxALYBmbslpI6gJAvy6eG1/qptgkQRILTy9UdhvI5/UAbiB+KnEabhSWOGdMuHL6hB2AHipkG0btRGnUgyZvGsRuWQdxq0pOjUmBraxGV8QTrGV+0eSZc4G1idBN41kAOh2nIoaVfGxNF587aTnE3FifIHmCqutY3527xtI110BOt1bcYg0qnMNEyTm13DvEPOdNVUYmzt7gab6flufMgfdLNL1D5E2k2O8ay77IGUzMGSLmMvlLpd6BevOw6yBbS+jJM6andBqVCN9ZtIaD1AEuUym+nqSQOvbq7+iG5zTsXerh6myiW3021iD08b78tF2Weumzn2tzhvJRRNY7AaxAlx2mzRAWh+FqsVS38w923HtKoflONiLdXTFreFtvdWXDnZHsd+Ujp3sqmN6xZH4lbkxBf9ILA+YmfwuHsP+5bJglZz41wc021IHgLgZ/K8emoGqzPbP4nHfHf4YjF1PmAiAAOWpM6+65GxODcGtLdZOhEOEaz6heLo+fOSyMqW9fZEaCJiO9kJt0Rjuscv77LL20xQfAGvfmi0Q0Tz2N9esfqg0hNyff13RaD/MG0Tty17Jcr8rXhrZLj3HO51+5Wj4Rh/qd5D7n9FSYPJTYLx9/TzVxw7jNENykuaZJktsfSdoQ9OM1DtbDF24jkWgie4g+6gaTxsddnBw9Kg+xRqWKY76XtPYifRMSprSuDsv8Ao8nMA0m92kwvc9pidLwHab5qRnntuu4lxEUxbVUFPiDXOlxvtt7jss3KRrDjuXpp6OIznKYO2rXRBF8rodz3Vh8yxnf8Okkz+Crb0O3JZvC4pptnB6GHeUEE+6t8Dicxyh0mCTBLQRzyOzNm/RXaU3jynuCcVn5NUGbDk4c5IBt6FUmNJneIHM+1m7akq5x4PyKkty2NsoG3QkFUPERJFiT2m3mYC050nXqgaG2wBJGp/CyB6lBpOF5JF7AAD1hCxbiBJ06n9BAVaKpJmbHZYzy14jtw8cvnL0uqWs5QdBpHnneb6bInzHHSPIF9+ugCnw6g3KCWieZunytuOlZ8l51Bjq4N9mf1TFBmURbpAj9bphyBVeBupabvgeIz0WHeIPdtv0U+N4c1KFRo1LDHUgSB56LLfDnHKdIOZUdAJkGCRexmNNAtfTxDXNDmuDgdCDIPmsunuafOqWIploBcGggeGSHAzf3uuVRxsijWrUxILahgj8hu0ehC5bfL+l9/8Z8ybR5r1rRN/wCeS8Dh/NVKZv8A0Q9e6IHCOgt6/t9kVjb5h5z90u10hTbU/lpSzpaUq5MDMNYuLCUerLfqDdYsfLTXbkq5lQWMA+fpqmjUkfVcbOg2ULyZQeoCACWkA6GxntzQxja4MMc9s21IHpolqeJeLNMBx2kE+euwTVfG5qlwBpIGmYanus5XUdeDLLkz6067DkgZ35na3gE9gqTHDKZaZG36ha7A5XNANxyNwkeN8Ca7xMABFyBYO/dcH05NTUZyjUdIiZ9FufhfAOZNR7gXEQA0hwaNTJFibDRYevhntu1xjly9Uu7GVWGxv0sfULePX25597NPqXF6v+W4dD9ln8XWssvT45ioynM+RZv1XtubxE6dEenWqkE1SQdmmx7wFq5yRwx4crlqwTE4nNI2QcLQv0CgG31AB3OytsM6hlmdJ+ombaAAATPdZwlt2fxPNjxSY6/oejjA0aT7Lx+PcdIHkqdnEyCZY0giIj6eoOs9UXCML25pzEvyRmsJvJaNrrrp5byyfB19Zx1JQXuABJIganWO8aJ93Dmi5DagI2Azs/1NAsRzCTxfDX0warI8IByxYtBucp9ekHkrQvLl8RCi7POWXEDMQNY7GFHCcbdSd/luezneAe7bgq5r0WHLiaIa17fqaNHgi48wqTiuCa+K1IHK8FzrfSdx7G3Qq0LyZA8RrVsS81HsYHEAHK9l8tpMHWPsuSVShmuGjqYETylckXKfKueborBYef6LlyHS+o9pm6mBYHr/AFXLlMDsGv8AN0Rv4umnouXJYvsNjrDrH86I7xD/ACXLljP9Lt+H/dn/ABpOEOMBW7rhcuXF9RQ8RYMzraifO6pm0xnNtv1K5cgrPh9IAyBy+yX40PG3sfYrlyCrqv6IDXG65cvTh+l8nn/drw6nzRME4gEgwbCe68XLbhl6/pY4TEOMy4mLiTvBut1xKkP8M8wJFNx/8Vy5Dc+WPpvIho0y6dtEThhs/pfmNSbjdcuS4y+MVFxF5DyAYA2Fly5csu9kf//Z";

let messages = [
  { createdAt: "2020-12-29 13:19:19.141243-05", text: "3" },
  { createdAt: "2020-12-29 13:19:19.141243-05", text: "4" },
  { createdAt: "2020-12-29 13:19:19.141243-05", text: "5" },
];
let messages2 = [
  // { createdAt: "2021-12-29 13:19:19.141243-05", text: "1" },
  // { createdAt: "2020-12-29 13:19:19.141243-05", text: "2" },
  // { createdAt: "2020-12-29 13:19:19.141243-05", text: "Hey hjkfgk are you" },
];
function Messages() {
  const messagesArray = (recievedMessages, sentMessages) => {
    let senderMessages = recievedMessages;
    let recipientMessages = sentMessages;
    let array = [];

    for (let i = -senderMessages.length; i < senderMessages.length; i++) {
      for (
        let j = -recipientMessages.length;
        j < recipientMessages.length;
        j++
      ) {
        if (
          Date.parse(senderMessages[0].createdAt) >=
          Date.parse(recipientMessages[0].createdAt)
        ) {
          array.push(senderMessages[0]);
          senderMessages.splice(0, 1);

          break;
        } else {
          array.push(recipientMessages[0]);
          recipientMessages.splice(0, 1);
        }
      }
    }
    if (senderMessages.length > 0) {
      senderMessages.forEach((msg) => array.push(msg));
    } else if (recipientMessages.length > 0) {
      recipientMessages.forEach((msg) => array.push(msg));
    }

    return array;
  };
  return (
    <>
      {/* <AllMessages /> */}

      <div className="wrapEverything">
        <div className="mainMessagesDiv">
          {messagesArray(messages, messages2).map((message) =>
            message.hasOwnProperty("senderId") ? (
              <div className="senderMessageBlock">
                <img src={message.User.profileImg} alt={message.User.name} />
                <div className="senderMessageDiv">
                  <p>{message.text} </p>
                </div>
              </div>
            ) : (
              <div className="userMessageBlock">
                <p>{message.text}</p>
              </div>
            )
          )}
        </div>
        <div className="typeMessageDiv">
          <TypeMessage />
        </div>
      </div>
    </>
  );
}

export default Messages;
