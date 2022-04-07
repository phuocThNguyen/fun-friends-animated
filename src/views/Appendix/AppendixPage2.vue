<template>
  <div class="interactive-container">
    <svg class="landscape" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1500 1000" width="1500" height="1000">
      <defs>
        <radialGradient id="grd1" gradientUnits="userSpaceOnUse"  cx="745.714" cy="970.876" r="1122.13">
          <stop offset="0.051" stop-color="#401d58"  />
          <stop offset="0.64" stop-color="#1a183a"  />
          <stop offset="1" stop-color="#0c0c0c"  />
        </radialGradient>
        <image width="391" height="391" id="img1" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAYcAAAGHCAMAAABswG5MAAAAAXNSR0IB2cksfwAAAKJQTFRF////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////TBKPjgAAADZ0Uk5TAAECAwQFBgcICQoLDA0ODxAREhMUFRYXGBkaGxwdHh8gISIjJCUmJygpKissLS4vMDEyMzQ1LSt3GQAADTxJREFUeJztnXl31LgSRycDYR2Y8FgHGJYQeCTDA4bl+3+1Zy0lVcmSrO5A3KHv/YMlhHNi3/Orst1y6bffAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAumAPP2j/FPnMwZ+0fad+oKMDFRdOTgIoLYlkCKn4+oxYw8TPZxAIqfhYbW8DET2ArC5j4wfRO9O8TmLgIegYMiPiZjDnoulj7EH4BNnHQUbH2YVxytrDQMLH2kVxqhiRcuTKkYu1jucQsWLhSgImfQs9CqaAuAxE/gLaFtoSZCkSclyELVxUNFZg4Fy0NdQcVGS0Tax/YpWLRQlVCoQIR52XBQj7nh4qKirqJtY/u0lDXUFo4rDFkYu3juyRUNRQWqhKMitIEkdiQZQtyxq8VFCoQcR46GoyFUoJ1sWhi7cPcdSoaKhbiSb9usCq0CURsSlODslBzYF00TSBijFEL8azfMMxVIGI7uhoKC+n033RYF4Mm1j7cXaWhoWJBGVAoFckEIjZmpqEIg7UQTv2thHbRMIGIEeoaZhZmDm5PGBnaRDUSiOgwoEFZyAoU2UVU0YoEIpq0NVgLIiGe+j8ySoYxgYhNWNKQLIgEOf13AtpGMlFEoipi7QPfLXoaUhiCBZFwJ3E3/zGqKEwgYpAFDRKGYEEk3J0TVVgTMRKIWGREgw9DsCAS/iyJKpQJHQlELFD2aNGQWkMOQ7AgEo4sUYUy4SPREEGvLuhrKMIQLIiEe5qsQkzkSOQmgYgWbQ25JuUwBAvRwX800UU2UUSik4i1T8EuUGsOoTdoDTkM3kJ0cF8TXSQTOhKlCFpESVvDodGQw+AsRAcPNNFFMHE3mIiRQMQSteZQ1xDDECxEBw810UU2kSLRFEGLEHrNodDgwiAWooNHmugimUhdYkjE2idiXRpVKV+wag0+DMFCdPBYE11EEzkSWUS6fKUyWTbV4MPgLEQHTzTRhTfhI4GIUfrNwWjIYXAWgoO/Ak/j78GFN5EjURFBZSroxcFoyDVpCoOzECQ8dTxz+D+JislEiESsTVYEgZhRj0OqSlbDVJMkDCLBGXgeiDK8islEiITUpq4IPDSrkjSHrOFINPgwRAnu/P8tBBlexWTCRSKIOFIiqEw1BqqS9AZdk6YwRAnu9L8QogunYjJhapP0CCpTlU5VSs1BWrRoCGFwFoKDl5ngIprwtSmKkGZNZarSjIOpSkrDw6BhCoOzEBy8crz2vwYX3oQT8SQ0iSwitghbmQjEQBxSc3C9wWtwNWkKQ7DgDEwcO9wfvAtvYopEFuGaddkiCERiIQ6qKrnmoDRMYQgWgoM3geAimnCR8E0iiFC92lcmAqFYioOpSqE3+NbgwhAsBAcnEe/idTDhIhFFPPAiTIsgEIpuHIqqFC5YlYbJgpcwnf63QlIxmXCRCN06Xr6Gh36pMhGIxEAcTHOQouRqksuCSHiX8C4mE69fi4iYiNCrVWUiEJmROOSqFK+URMMUBidhOvn/zXgVkwkXCVebnkuzlhYhlakfiLVPzMWyQRxSc8gapjA4C9PJfz9xenrqfvMqJhMuEllEuLPWlYlAKBYvlmIcclVKvSFocBa8gtMzx6mX4U24SBgRtjIRCMVgHHJVkgtWr+HEa3AWnIJ/HMGFNyEiXhgR6m6OQCRaHuZxsFUpaZjC4Cw4BR883sVkwol4G0XoiyYVCHNTjYeN46CKUtAQJPzPEVRMJqZIWBF/Fa16+aZ67ZNzcSyWJR0Hq+HYa5hqkgtDkPBxwqvIIk6qInwgKEyZuYerRVlSF0tlVUoavAUn4dPHoMKbcLXpXT0QrkPEwhRF6E69zx7aZam4WDIapqIUwzA5ELKI920RFCbNUFnqxcFriBY+R5KJs9CsnYhmYbrR7dRrn5+LoleWbqSyVHZpreFMNEwC/nVkET4ROhDdwnS4z4Wp6sF88FCUpRyH2By8BmfBS/gSVUwmnIgzEdEsTHjwjLSHWlnKVWnqDaLhSyCJiJVJAlErTDSIQMOD/gCoXZZiVZqKktPgFHz9+lVMuNKUKlOrMN1evJVb+wRdDO32kD8PzR/DeQ+6LEkcooavAW9iSkSoTL3CZFduVK9c1z5DF8NyewgepD2kq6VclnwcnAbv4Nu3YMIF4lMMRPOKiUYtWA0zD/JQo2wPcrXkr1klDt6CI4jQgWg0iPzMFQ9beFDtIVwsRQ3fBBMI0yBG7uT28dn3yOVS6SHexKWy9Kni4euXf0MgUoOoNGrxQKPue7jZ85DbgytLouH7hARCCpNt1M1HfXjoXLZWHrb+3fHwXXuQS9ezZQ/5ggkPm3k46Xr4FgqT8XCMhzZbeOjVpe+1ukQelvkh/UH36RSHL0WfflPp0/QHYeB6qXXdOr+N6123cr3UZSsPL/T9g76PU5etqj04Dycb3D/goXYfd7t2P60ft6rC5E2k5xqf0xPX1gPXzv30vnpYeL50NPv4IXuoP+czceg9X+K5xm/Dz1trNxAnb+VD0dAhZs+9zQcQ+RNqvXSm+qYcHlqfP7QaRPtzIPWULz/mK9qD9jBbW7lfGrZ7wKQLU/G5aLJgPwZqLxS4xUIBz0KjlnUCR9XClNYJ6GUCeaFAqEr64zgul1q0G4S6o66tqjTLl9KCDVk3kzSY9Rr9hWR73B7GVnsvLeeLIvw6ss96IdnZWWdB39j6pX3xMNogOgvJ8oK+j1GCX+L6T9TAer4hqg1idH2riDiLi70/ftQLjU/zar6B9a17fBfnWCxM8si1Hgi94Dssu/cL79UbEF7D0nrvvS9LG74dV74cJyLCeygfPugXUd6nolSPw0hZ2h8P4+8DlYHIIkJtCm9lxTezTrOGoiq13wfa36slx2aBMJXJviAX3lKMbyq+T29lVV/LSu/HEYfEvFPXA6Eq01yEf233NBDe3JXXRaMGVZU674vu69WSY4NA5MqkRLxJr7G/D+gX2V8HDdWqxFtZhsLDUiCkMqUecRzGOryTkQJmsMMrraGsSktx2C8Pg4GwU3+UCD/nJI45CQqChDdh5EzSUKlKxEEzFAhTmXJpepHH/pxkzOCfPAprPuaEOGgGAnE7jDGOU+HSUDg1gOlYxmDJJCwZhKU0zKsScVAsB0JPSbwvidADyV7JVLhjmUaWBsPpUYlm2Ex577D3Hkbn80mLUCLCgL6gwo/oS9P59KDEpKGsSsTB0AyEqUwyRTfOMo7TW/XY0DSs8mUeHKomuN4rh5ERh4JOIMqp0nmotJ8pncbohhG6L9MkXRmkayYaM7+1z2IgzKxEO0lXTTTWk6WfyThjO+G7Oc8YD456IBoTje1kaRmz/jyTJq0/UVOl75mtB6hKVQ7qIswuHHr3h1Sb8rYDzzJP7bj76sYDtZ04Dvbew0JlUr1aj7x/YLbheCrEnTgey/YP92W7pnIjDqrSnH5lUr3a7A4k29I8yVui+B04ngxuTENVKmkE4qquTFbEPbVN02O1RdDjtDuQCQP7A43Rq0xGhNmpKW5b9khtmfUo7ZbV2bjsGlWpRaUy1UTYSMRt/B6qLeQept3jttzIb+0TsTKNa6ZChNrJT21r+UBtqah2ttxgY0uulRLtFpFF2NqUtnm9r7YYVTu9HkkY7rDR6wYsi6htuCs77sqWu3bn47umJqFhiCURrQ2owy7gavPpvP202X/6hmnR9OgWtRYxF1HfkD3vyH6Ut2Mv92O/vqQBD54RESYSzoRXEVwcJQdOQrJgatJcA3GYUatMSkQZCWfCqwguhLtRQrKgahIahuiJmEXCmfAqgovMnSghWdBhQMMIAyIkEs6EVxFcaP6IEpIFNGxI2SKyCFObogmvIriw3I4SjIW+BjwY+iKsCa8iuEg24t9uRQkVC2gYoi5C1yYxkVUkGUlBkuAszMOAhmVmIiqREBNehbjI3BQJMwtoGGdJRDKhVCQZ8W9Ggrcwq0loWKIhomkiudASmhbQMMyyiGxCVFiuWwto2I6DjUxYGfKlUQto6NAXoU0kFYZrpQU0bEdFRNOElSFfOmxaQMMGtEUYE1mFpWIBDVtxsGhCVJQuDo2EngU0DNATUZqoYC2gYXuqIkoTdRVXGxbQsA0HYyasDPVVLPwo6iKSCa2i5MrMAhq2pxGJbKKu4sqSBTRsyMGyicKF/oeWBTRsTFOEVVFBfysazs1Bx0Rbxe9Y+OF0TVRcFP9e/ve1D+fyUp7J0kSyUfn67P+ufTCXmdnJrKoYkICFc7KNicr/WfswLj+Vk9pVUfv2tY/h16Bqouqi8Z1rH8AvQ+P8ahntb1n7h/+VaJ/lJdb+yX810LArYGFXwMKugISdAQu7AhJ2BxzsEDgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADYCf4PUtiSuBMst4YAAAAASUVORK5CYII="/>
        <image width="391" height="391" id="img2" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAYcAAAGHCAMAAABswG5MAAAAAXNSR0IB2cksfwAAAKJQTFRF////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////TBKPjgAAADZ0Uk5TAAECAwQFBgcICQoLDA0ODxAREhMUFRYXGBkaGxwdHh8gISIjJCUmJygpKissLS4vMDEyMzQ1LSt3GQAADS1JREFUeJztnel21cYSRnHAJGAI5ib3AiZhCJNJIBAg7/9qVz1XdVdLreNBNmfvP8xrcbTXV9VHanXduAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcKkcZLb+n+wrByZb/6/2C9sBLi6VeQmouBxGLGDighmVgIqLZJ0FTFwM6y1g4vzZzQImzpmZ6/xDABMXz7wBASIukEEHsy62/gzfAask9FVs/TGuOesl9FRs/UmuNQMWbnowcZHMW7jZMq9i649zTZmzYDiwVCDi7PQt9CW0KjBxRkYs3NKYKhBxJjoaug4aFT0TW3+wa8WSBVtCpaJjYuvPdo0YtnAoaVUg4kyYGhoJhxaYOD/mNBgObk8YKmoTiFjJuIXbNVpFZQIRqzA0WBbk5f+xVaFMWJHY+mNedboapIUsQKNUWCYQMcpCGIQFcf1/alw0JhCxivkwFAtJgEaqKCZUJBAxwqyGykK6+HcCyoVpoo3E1h/3qtLRYFhQCgpFhTaBiDU0GqowJAvSwd2CUKFMlEggYgRbg2lBKThyNC6iCTMSiJhhQEOwUBwc1WQXlYk6Eojo0tfQWBAK7kmKi6iimEDEKEsapAWp4H5CyIgqsglVm2oRW3/wq8WchhyGbEEZ+NkhbUQV3gQiVrGgIYUhWygCNEKFN+EjIWoTImbpaZA1yYchW/BX/UGNUOFN6EggYoG6RzcaShiyBX/djzVChTcRI6FqUxFBr66Y0dCGIVtwF/6hpqjwJmIkUm1CxAIjGkoYsoXpwv9Hk1V4EzESTW2yRGx9Ca4CVnMILVpqKGEQEn7RCBU5ElVtSj2CFlHT13CoNMQwRAtBwq+apCKbELXJizhERA+rOdgachichSDhv5qkwplIIu7NiqBFJFZokBaChP9pkgptYlDE1hdiWzpVqSxYKw3JQpDwSJNUeBOzIqhMmnUafBiChSDhsSap8CZ8JGoRtxFh0q1KtYZYk3wYnIUg4Ynn5OQk/CSpmEzISDQiqEwVc3FoNfiaNIXBWQgSJgMnTwMnwYZXMZmYIuG7RKxNUgSBaLDjkKuS1JBq0hQGZyFImK7/b4ngwquYTIRIpNp0b04EHharktIQatIUBmchO/g9kV14Ey4SqTZJEVSmloGqFFt01OBq0hSGYCE4eFYILqIJF4lQm5QIKpPBTFXKzSFoeKA0BAtBwvNCUuFNVCLiqonKZNCNg2oOQoNrDVNNiha8gxeel+EH7yKa8LXJNQkn4kEUYVQmArEYB9EcXIuWGoIFZ2DiD4f7iVcRTVQiyqKJQFQsx0H26Khhag0uDMFCUPAqEGRkE099kwgiHj4sLcJXJgIhGIhDaQ6hNwQNUxgmC17CdP1fJ4KLly+DiSzC9YjSInJlIhCR2TiktVK4mxG+N0gNUxaShDeJpOLlZCKIOAki3PeI2CJSZSIQmbE4lOYQe4OvSS4MTsJ09d8WvAtvwkVCJCK3iFSZCERhMA6pOYQFa9IwhcFZmC7+u4nT01P3g1fhTRQRj6MIVZnmA7H1hblcVsQhNwevwbUGFwZnwSs4fe849TK8CS/iRRLxKInIlYlACEYWSz4OuSqJNDgNwYJT8KcjunAmpkgoEblFhMpEIASDcYhrpazh96BhqknRwmTgr0Bw4TIRRTxXInJlIhCSnoc2DlVVEhqchUnAh4BX4TLxztcmJyJ+j8giUiDUl2o8rI+D0DCFwVlwBj46gorJhBZhBWLxS/XWF+fyWCxLMg6VhldKw6Tgb0dQESJRStMzIxAUpkLrIT13SPe7xWKpjkPUECw4B58+fQoqfCSiiGnV1Hp4kAtTFCE79T576JelarGkNLwTGj4lggkhwgwEhUkwVJY6cXjj4uA1BAufE86Ej0TsEU5EtzD9NNupt74+l8VYWaq7dKlKrjcUDf94kgmfCB2IucJ0uM+FyfSgHofqsiTj8NYvWL0GZ8E7+PIlmJhEuNL0ZxIxXpj23MNMe7DKUo6D6w1Jw5dAFhEqUw6EVZhoEIGOB/E8tC1LuUvHqjQVJafBKfj69WsyoSpTKkz1iulo8avc1hfoclhuD97D8XG7WkpxcFUpavga8CamRITKlAJhFSa9YcBcuW59hS6H5fYQPMT2YJUlX5WcBu/g27dgwgUiVaZUmAwPNOqA1tB4SDc1qvaQVkupO3xOHr55sghfmVwg0orJ8kCjvrGjh9geUhz+TnH4logeXGX6oBvE8IJpzwrTyHKp9lC1h1KWnIJ/iwjlIa1cLQ806nkPdwY9TGUpa5gogYidWn2D6N7qw8PMstW42RqWS69ND/9GD06EaBBywWR6KAsmPOBhQ3bw8NuAB71gWq5LeDiP/iD6dIlD6tMf/ur3afpDYmC91Fu3vl21bn1t3NhgvZTZycOzcntJf4/LGurvcau+P+DB+h53ZHjo39f4Ju5rfC53XDs3XGe+T++rh4X7S1lEfvzwun+f7+uXJg72EznuayRMD+39VmPhmm5s5A6R7nvHG9/VA4jyhDpqMO634qG/cLWfA4nHouk50D/lOVB8EFQeyOUHo82Oje7rKPulYbcbTKow6eeiQULQUD2gtjcK3GWjgGehUad9AsdmYXorKlPZJlD2CeQNG2ycWaLfIMQ3amtXpdi+9KHdN5M1qP0a8xvJ9rg9jO32HtjOl7eRfY4bycL2pXrbzPr9S/viYbRB9EW8F/sqy26+j3GrsX8LgrK0jNkgVGGa2d+aRITaFPcZh43GcVdlNw6zZWmfPSzt97YDofbdf/yYNt7HNyCyhqX93ntflla+HVe/lZVEqPdQ4osop7ko2XEYKUv742H8faA6EEXEO/VaVnwxK2uoqlL/faD9XS051gVCVabUI0IkwluK8U1F/8roG6WhjcMRcRC0ndoOhKhMrQj/3u779/rF3deiKImqNPO+6L6ulhwrAlEqkxDxKr/GfhoQL7InDWZV4q0sReVhKRCpMuUe8Uc4W+NtPFLgnTzYIa6Uooa6Ki3FYb88jB83I0/9KSL8OSfxmJOgIEh4FQ7/yRqMqkQcJEOBUJWplKZn8fAleexPOW0mvsEuTteQJ2E1d7z33MPYcWTp4J9y1Ek+gEkfg5VPX0rHLxUNpSrx3cFgORDqIKyUCHkg2Yt0Klw8Ge6FOI5MHJXYnJRIHCRLgdCnhkoR4YC+oMIf0ZdP58vH80kNYq1EHFq6gTAOSjzOZxk/DrVJHBuazqoMEuJxlXGlVDTc5yTdHjOBaE6VfihFPKmO0X3eHKRbTjR+WB0bShwaFgOhTnCtDjTOKn6XJ0s/FccZ1xqsY3Tx4LAD0TnR+Licdm8ds+4dhJPWHz+uTry/r5sDVaniwBahpnAcCRHywPui4mk9eSCE4VdrAoQ1ieNg7z0sVCbRq/U0FDmG4yQRJ3E8SuMffklDguqJKFSllvnKJHp1MxAljaV5kqgG08gpHMxDWaITCGMwTZmWVY1pKrOB1KAme2IW84E6zFUmJaIemJXHlpVZWc3gMjFU0dBAHCRGZbJENAPk8hi/MjvubIP8tr4QG9NZM1Uicm3KJvJYyzJL0UsQFgYGW7JWyvRbRBGha9MDNea1zBb100XleNFm0CvzRWdYFtEM3JVjj8usXT9tN1mwBh+jYZYlEb0B1GEMeJk9rcdPm4PAb9Gj+1gtohXRDGT3KspIdv8rOY69HT7d1YAHz4gIFQlnwqsILo6zAychW7CGsQsNxKHBqkxCRB0JZ8KrCC4SP0cJ2YKoSWgYYk5EEwlnwqsILgr3o4RsQYYBDSMMiEiRcCa8iuBCci9KyBbQsJK6RRQRqjZFE15FcKE5ihKUhXkNeFDMi9AmvIrgItuIv7obJRgW0DCELULWpmSiqMgysoIswVlow4CGZRoRRiSSCa8iuSjcSRIaC2gYZ0lENiFUZBnxV0qCt9DUJDQs0RHRNZFdSAldC2gYZllEMZFUaH7UFtCwGwerTGgZ6bdGLaBhhnkR0kRWobhdW0DDbhgiuia0jPRbh10LaFhBX4QyUVRoDAto2ImDRRNJRe3iUEmYs4CGAeZE1CYMtAU07I4pojZhq7jVsYCGXTgYM6FliN/Fwnlhi8gmpIqam40FNOxOJxLFhK3i5pIFNKzkYNlE5UL+Qc8CGlbTFaFVGMi/ioYzczBjoq/iByycO7MmDBfVn9f/fOuPc32pr2RtItswfr/5t1t/mOtMczFNFQMSsHBGdjFh/JutP8b1x7iosyqsv771Z/g+ME2YLjp/c+sP8N3Qub5SRv+vbP2f/57oX+Ultv6ff2+g4aqAhasCFq4KSLgyYOGqgISrAw6uEDgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC4Evwf0sSUHO9737gAAAAASUVORK5CYII="/>
        <image width="372" height="372" id="img3" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXQAAAF0CAMAAAAEvTJhAAAAAXNSR0IB2cksfwAAAHhQTFRF////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////ZTISyAAAACh0Uk5TAAECAwQFBgcICQoLDA0ODxAREhMUFRYXGBkaGxwdHh8gISIjJCUmJxLeo9oAAAk7SURBVHic7d3rchNHEEBhC2MciMEGJ5A4hGBw4P3fMLtz7ZnpuUiWNVZ0vp8EUuhUV+8iSztnZwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQ2ASz/yYnYaOa/bf6H9ODE/7JtIMT/gmMJSf7/owXp/uebJuc7I+1S3GyP8rOycm+q2rOFymy789Q8E752a/hyGwTvBV+9us4IjsUr3Wf/VKOxlDx8wXZ96WT/FzR7j77BR2BVnItuBae7NupJ28VL7pTfVw1uWz7MqN3p/qgfvI8eBmeYd9OpXm3eNadYd9CO3mIe5Eru+vZZ7++Z2gseVE8C59np3qL2jxLHhK/EvLureyzX+RzozRPkyu9i/BJdqr31MdcJg+VL4MsvJad6rrqmJfJLxW17Mqwz36lz0etuUieFP9FKLsr2aleKJrLMY/Jy+Bp+Cw71Zv05lpy2/h1QnRvZCd6qtM8JJfB31hJ+CQ71ZvU5nryJHgQu1eyUz3Xby6L28y/CiK86071rix6aK4kl72vDFm+kj1WJ7rXae4Wiyx+VZDd45Khek2jeRxzmzwEf5sJ4WV2N+xUVygLPTa3Yx6Sx+DvhBheZC+rZ2t99uueSRn0pLkZ85Bc9L52RHmfXQ57Xp1RP8sH3S+XvHlILnPfLGR6n90Me1ZdWTCzX/k8+qCL5q9t85Dc10657iZ7HPa8OqNuVJeLaR5Xi0i+Nn6fcd1N9mzYqV5oLBc35261iORr5Q8J191kl8PuZr261me/+jkay0U0v7LNQ/K1863gusfsbtiz6oy61Vkuvvlb29wkd8F/E1x4lz0Mu6/eWDCzX/8MzUGXzd/Z5j75Wvr3wHV32cNml9UZ9ai3XGLzMOam+Jr6Y+DCr9nFsIfqzQUzu8Dh1QY9LhfZXCZfW39yXHeRPakeFgyjbgwsl7K5Kb7G/sNx4dfsSvXegpnd4OCag+4WumueJ19r/2m47mn2UN0tmPqoz25waJ1Bdwu9aG6Km953Cx9+zV5WFwuGUTcagy4Xum+eJr8TbPeQPVaPC4ZRt/qD7hb6ss+T5qb4X4Lpvk57rG72ul8wjHowMOhp85h8Lf05sN3DsIfqfsEw6lESvTLofqHnzZfUfwemu532UF0smMqon2T03q2LHXRzs7heQ9fmMfna+otju4dhX6vf+uqMeqqIrg+6Wy7LPk+ar7X/MWx3N+2m+rLX44Jh1KXRQffLZdktIrkN/vWrDx+Gfd0wYsGEUW/cq88ucThbDLpfLsucx+ZfBTPuJrup7hdMY9RPdL/0o7tBF8tlbR6T3zs+u62+Xk3DgslH/dT3i37vkmwXP+hiuYTmJve3hevuqi8bxq51v2DcqMd3YIiervRiu4RB98tl2S0++TfBZ1+rxwUjRr2zX2a3OJSx7RIH3S+XZc7X5mvq747NvlRfZj0uGDPqbquv+4WlPrxdzK2LHXS3XHzzNffDwmW/99XNgjF3MGHU03d4T3i/1KL7H16E7WJuXeygu+WyNvfJY/b7+7Bg3Kj7G5hsqV8QvXXD6LaLuXWJy8U1X3P/u3DZQ3U36vYGxlxKWere2Ep328XcuoTlsjb3yWP2pfq6YOyo2xsYu1/MUn9T3DSeYHT9Oip+ZOSi++1ibl3EcnHJf/xw2ZNRtzcwbr+EK2n2/ssJXklr0ePPo+111N+7uO1ir6Jm0E3ylahuRt3cwIT9Ur2SEl2Nbq+j/t4l2y4+uc0eR93cwMT7l3glfcPtS/PmRf7TSNy7xMvoQx7dVr8P+8Xfv6jRxagTvXbzkq/0OOg/F8mo50vd3b703/Oa3eMgtrljDP8yMtHFdvn501W3ox6Wur9pzO4ZT/72ZSz6+zy6Xely0JNRL6N/8NHLNxqJTvQDYL1MsG10LqR78ExuGYnOP46eWBKdtwEOoxY9/fxF8YbXl/iG18Mub3gRvXYlfV17a/dz+tauf293q7d2Tzn6Dj/EuCt/iPHQ+CFGccd48tdR9Up6cbAf1xE9vX15lV1Jmz+Y/m6L84PpQa2lPvgRjG/xExi1j2Ak19Hy04xE3/LDRuLTRvfFh43CoI+t9FOJPvTPoz18rK5Y6Sf9sV09+p4+QPox+YQ628Ub2i+7fVT6U/5dDLaLU0Tf7ksBX6pfCvDL5YP41lF8QsCJf/+lv1/28vUX9eOjJ7rS9f1SfqOx8kWvz+Nf9GK7CJX9sv+vNPa+cnRK0QdHXf3y7t1WX97ly3XR0Kj7BfOor6kz6NHAqO/tgQw8G8Dpj/o+Hz3CoBtp9HTUH/mQnZvkITsMutAZdR4n9RTao77vB6cR3WqN+mXyWMbhRwTmzRn0XG3UlYdhXo8/DFNp/oqn7Ub1UX/MY1+15gx6UI764AOOb2/VJxxfK4/aTZYL0c/qTzi+EI9P7z/KWz5TOn2oNMtFsVGrxwUz+NB6mVw+Pp2H1qsaC8ZXrx/PYI8IuLlJk9cPCmDQLX3UlUMxyoNI4mkY12ly7UgMBl3SR71/5M71tcj9Lk1eHv7CQUepXvXRw6XeFodLZc0Z9EhZMLsdo3bFMWrjGtX1AwPL8wLjiYEcGDgmi946GlMeRZrkdoeS9o7GJHrQrK6dSJqeAStPgc2S07yuWj057jgeMJ2fdiyO3fXJOXi3q129ebC3P9m7PNi70ZzoZzJ67wh77QR7eYZ94wh7Bj2TR5fVs+yue+5SSU7ztmLWW9mz8v7XBpPTPGhXF9ljeMn9J5G82pzowaasrmT33V8pwW1xNTnNK+rV0+yhe+pCSU7zrs1w9jx8+OV+cppn1OpZ9ti98FJPTvO2zVB2tfvLoeQ0V1Sq++yxu0gvf+08T07zEb3sSffUOcl3telm18KL/1hLTvOGanWZPabPfvEFzXdTz553rxcn+bY2jey18Onvyf8Ps1/RMcib5d2T9MV/Kv/07NdzJAayV5D8Ecp4A92VPzT7dRwXJWC7u/oHZr+Ko6NW1MNXfuvsV3CUKi1l+sZvmf23P1qNph2z/+ZHjeRTkHwOik9B8jkoPgnBZ6E3AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACL/wDlrFN7sUAF7gAAAABJRU5ErkJggg=="/>
        <radialGradient id="grd2" gradientUnits="userSpaceOnUse"  cx="1136.524" cy="693.262" r="15.673">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd3" gradientUnits="userSpaceOnUse"  cx="1136.524" cy="693.262" r="15.673">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd4" gradientUnits="userSpaceOnUse"  cx="1136.524" cy="693.262" r="6.209">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd5" gradientUnits="userSpaceOnUse"  cx="1136.524" cy="693.262" r="6.209">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd6" gradientUnits="userSpaceOnUse"  cx="928.803" cy="743.637" r="15.673">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd7" gradientUnits="userSpaceOnUse"  cx="928.803" cy="743.637" r="15.673">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd8" gradientUnits="userSpaceOnUse"  cx="928.803" cy="743.637" r="6.209">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd9" gradientUnits="userSpaceOnUse"  cx="928.803" cy="743.637" r="6.209">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd10" gradientUnits="userSpaceOnUse"  cx="977.958" cy="626.71" r="15.673">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd11" gradientUnits="userSpaceOnUse"  cx="977.958" cy="626.71" r="15.673">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd12" gradientUnits="userSpaceOnUse"  cx="977.958" cy="626.71" r="6.209">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd13" gradientUnits="userSpaceOnUse"  cx="977.958" cy="626.71" r="6.209">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd14" gradientUnits="userSpaceOnUse"  cx="965.354" cy="591.943" r="15.673">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd15" gradientUnits="userSpaceOnUse"  cx="965.354" cy="591.943" r="15.673">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd16" gradientUnits="userSpaceOnUse"  cx="965.354" cy="591.943" r="6.209">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd17" gradientUnits="userSpaceOnUse"  cx="965.354" cy="591.943" r="6.209">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd18" gradientUnits="userSpaceOnUse"  cx="855.3" cy="576.269" r="15.673">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd19" gradientUnits="userSpaceOnUse"  cx="855.3" cy="576.269" r="15.673">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd20" gradientUnits="userSpaceOnUse"  cx="855.3" cy="576.269" r="6.209">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd21" gradientUnits="userSpaceOnUse"  cx="855.3" cy="576.269" r="6.209">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd22" gradientUnits="userSpaceOnUse"  cx="796.466" cy="529.447" r="15.673">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd23" gradientUnits="userSpaceOnUse"  cx="796.466" cy="529.447" r="15.673">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd24" gradientUnits="userSpaceOnUse"  cx="796.466" cy="529.447" r="6.209">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd25" gradientUnits="userSpaceOnUse"  cx="796.466" cy="529.447" r="6.209">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd26" gradientUnits="userSpaceOnUse"  cx="839.626" cy="499.482" r="15.673">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd27" gradientUnits="userSpaceOnUse"  cx="839.626" cy="499.481" r="15.673">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd28" gradientUnits="userSpaceOnUse"  cx="839.625" cy="499.482" r="6.209">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd29" gradientUnits="userSpaceOnUse"  cx="839.626" cy="499.482" r="6.209">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd30" gradientUnits="userSpaceOnUse"  cx="1124.535" cy="591.943" r="15.673">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd31" gradientUnits="userSpaceOnUse"  cx="1124.535" cy="591.943" r="15.673">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd32" gradientUnits="userSpaceOnUse"  cx="1124.535" cy="591.943" r="6.209">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd33" gradientUnits="userSpaceOnUse"  cx="1124.535" cy="591.943" r="6.209">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd34" gradientUnits="userSpaceOnUse"  cx="1006.135" cy="681.403" r="15.673">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd35" gradientUnits="userSpaceOnUse"  cx="1006.135" cy="681.403" r="15.673">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd36" gradientUnits="userSpaceOnUse"  cx="1006.135" cy="681.403" r="6.209">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd37" gradientUnits="userSpaceOnUse"  cx="1006.135" cy="681.403" r="6.209">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd38" gradientUnits="userSpaceOnUse"  cx="965.354" cy="696.163" r="15.673">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd39" gradientUnits="userSpaceOnUse"  cx="965.354" cy="696.163" r="15.673">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd40" gradientUnits="userSpaceOnUse"  cx="965.354" cy="696.163" r="6.209">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd41" gradientUnits="userSpaceOnUse"  cx="965.354" cy="696.163" r="6.209">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd42" gradientUnits="userSpaceOnUse"  cx="1226.655" cy="740.958" r="22.722">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd43" gradientUnits="userSpaceOnUse"  cx="1226.655" cy="740.958" r="22.722">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd44" gradientUnits="userSpaceOnUse"  cx="1226.655" cy="740.958" r="9.002">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd45" gradientUnits="userSpaceOnUse"  cx="1226.655" cy="740.958" r="9.002">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd46" gradientUnits="userSpaceOnUse"  cx="1019.38" cy="626.347" r="17.151">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd47" gradientUnits="userSpaceOnUse"  cx="1019.38" cy="626.347" r="17.151">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd48" gradientUnits="userSpaceOnUse"  cx="1019.38" cy="626.347" r="6.795">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd49" gradientUnits="userSpaceOnUse"  cx="1019.38" cy="626.347" r="6.795">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd50" gradientUnits="userSpaceOnUse"  cx="878.698" cy="505.405" r="5.924">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd51" gradientUnits="userSpaceOnUse"  cx="878.698" cy="505.405" r="5.923">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd52" gradientUnits="userSpaceOnUse"  cx="878.698" cy="505.405" r="2.347">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd53" gradientUnits="userSpaceOnUse"  cx="878.698" cy="505.405" r="2.347">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd54" gradientUnits="userSpaceOnUse"  cx="771.026" cy="474.714" r="5.924">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd55" gradientUnits="userSpaceOnUse"  cx="771.026" cy="474.714" r="5.923">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd56" gradientUnits="userSpaceOnUse"  cx="771.026" cy="474.714" r="2.347">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd57" gradientUnits="userSpaceOnUse"  cx="771.026" cy="474.714" r="2.347">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd58" gradientUnits="userSpaceOnUse"  cx="881.602" cy="715.288" r="5.923">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd59" gradientUnits="userSpaceOnUse"  cx="881.602" cy="715.288" r="5.924">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd60" gradientUnits="userSpaceOnUse"  cx="881.602" cy="715.288" r="2.347">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd61" gradientUnits="userSpaceOnUse"  cx="881.602" cy="715.288" r="2.347">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd62" gradientUnits="userSpaceOnUse"  cx="973.678" cy="751.961" r="5.924">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd63" gradientUnits="userSpaceOnUse"  cx="973.679" cy="751.961" r="5.924">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd64" gradientUnits="userSpaceOnUse"  cx="973.679" cy="751.961" r="2.347">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd65" gradientUnits="userSpaceOnUse"  cx="973.679" cy="751.961" r="2.347">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd66" gradientUnits="userSpaceOnUse"  cx="881.742" cy="600.268" r="5.924">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd67" gradientUnits="userSpaceOnUse"  cx="881.742" cy="600.268" r="5.923">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd68" gradientUnits="userSpaceOnUse"  cx="881.742" cy="600.268" r="2.347">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd69" gradientUnits="userSpaceOnUse"  cx="881.742" cy="600.268" r="2.347">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd70" gradientUnits="userSpaceOnUse"  cx="875.678" cy="566.666" r="5.924">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd71" gradientUnits="userSpaceOnUse"  cx="875.678" cy="566.666" r="5.923">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd72" gradientUnits="userSpaceOnUse"  cx="875.678" cy="566.666" r="2.347">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd73" gradientUnits="userSpaceOnUse"  cx="875.678" cy="566.666" r="2.347">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd74" gradientUnits="userSpaceOnUse"  cx="1130.459" cy="751.961" r="5.923">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd75" gradientUnits="userSpaceOnUse"  cx="1130.459" cy="751.961" r="5.924">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd76" gradientUnits="userSpaceOnUse"  cx="1130.459" cy="751.961" r="2.347">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd77" gradientUnits="userSpaceOnUse"  cx="1130.459" cy="751.961" r="2.347">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd78" gradientUnits="userSpaceOnUse"  cx="1113.304" cy="663.698" r="4.261">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd79" gradientUnits="userSpaceOnUse"  cx="1113.304" cy="663.698" r="4.261">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd80" gradientUnits="userSpaceOnUse"  cx="1113.304" cy="663.698" r="1.688">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd81" gradientUnits="userSpaceOnUse"  cx="1113.304" cy="663.698" r="1.688">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd82" gradientUnits="userSpaceOnUse"  cx="1177.204" cy="660.897" r="4.261">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd83" gradientUnits="userSpaceOnUse"  cx="1177.204" cy="660.897" r="4.261">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd84" gradientUnits="userSpaceOnUse"  cx="1177.204" cy="660.897" r="1.688">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd85" gradientUnits="userSpaceOnUse"  cx="1177.204" cy="660.897" r="1.688">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd86" gradientUnits="userSpaceOnUse"  cx="992.7" cy="529.447" r="4.261">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd87" gradientUnits="userSpaceOnUse"  cx="992.7" cy="529.447" r="4.261">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd88" gradientUnits="userSpaceOnUse"  cx="992.7" cy="529.447" r="1.688">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd89" gradientUnits="userSpaceOnUse"  cx="992.7" cy="529.447" r="1.688">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd90" gradientUnits="userSpaceOnUse"  cx="886.865" cy="655.845" r="4.261">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd91" gradientUnits="userSpaceOnUse"  cx="886.865" cy="655.845" r="4.261">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd92" gradientUnits="userSpaceOnUse"  cx="886.865" cy="655.845" r="1.688">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd93" gradientUnits="userSpaceOnUse"  cx="886.865" cy="655.845" r="1.688">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd94" gradientUnits="userSpaceOnUse"  cx="815.487" cy="536.69" r="4.261">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd95" gradientUnits="userSpaceOnUse"  cx="815.487" cy="536.689" r="4.261">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd96" gradientUnits="userSpaceOnUse"  cx="815.487" cy="536.69" r="1.688">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd97" gradientUnits="userSpaceOnUse"  cx="815.487" cy="536.69" r="1.688">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd98" gradientUnits="userSpaceOnUse"  cx="995.887" cy="612.015" r="4.261">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd99" gradientUnits="userSpaceOnUse"  cx="995.887" cy="612.015" r="4.261">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd100" gradientUnits="userSpaceOnUse"  cx="995.887" cy="612.015" r="1.688">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd101" gradientUnits="userSpaceOnUse"  cx="995.887" cy="612.015" r="1.688">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd102" gradientUnits="userSpaceOnUse"  cx="1065.1" cy="677.142" r="4.261">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd103" gradientUnits="userSpaceOnUse"  cx="1065.1" cy="677.142" r="4.261">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd104" gradientUnits="userSpaceOnUse"  cx="1065.1" cy="677.142" r="1.688">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd105" gradientUnits="userSpaceOnUse"  cx="1065.1" cy="677.142" r="1.688">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd106" gradientUnits="userSpaceOnUse"  cx="712.57" cy="405.528" r="15.673">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd107" gradientUnits="userSpaceOnUse"  cx="712.57" cy="405.528" r="15.673">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd108" gradientUnits="userSpaceOnUse"  cx="712.57" cy="405.528" r="6.209">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd109" gradientUnits="userSpaceOnUse"  cx="712.57" cy="405.528" r="6.209">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd110" gradientUnits="userSpaceOnUse"  cx="504.849" cy="455.903" r="15.673">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd111" gradientUnits="userSpaceOnUse"  cx="504.849" cy="455.903" r="15.673">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd112" gradientUnits="userSpaceOnUse"  cx="504.849" cy="455.903" r="6.209">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd113" gradientUnits="userSpaceOnUse"  cx="504.849" cy="455.903" r="6.209">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd114" gradientUnits="userSpaceOnUse"  cx="554.004" cy="338.976" r="15.673">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd115" gradientUnits="userSpaceOnUse"  cx="554.004" cy="338.976" r="15.673">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd116" gradientUnits="userSpaceOnUse"  cx="554.004" cy="338.976" r="6.209">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd117" gradientUnits="userSpaceOnUse"  cx="554.004" cy="338.976" r="6.209">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd118" gradientUnits="userSpaceOnUse"  cx="541.4" cy="304.209" r="15.673">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd119" gradientUnits="userSpaceOnUse"  cx="541.4" cy="304.209" r="15.673">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd120" gradientUnits="userSpaceOnUse"  cx="541.4" cy="304.209" r="6.209">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd121" gradientUnits="userSpaceOnUse"  cx="541.4" cy="304.209" r="6.209">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd122" gradientUnits="userSpaceOnUse"  cx="431.346" cy="288.535" r="15.673">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd123" gradientUnits="userSpaceOnUse"  cx="431.346" cy="288.536" r="15.673">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd124" gradientUnits="userSpaceOnUse"  cx="431.346" cy="288.535" r="6.209">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd125" gradientUnits="userSpaceOnUse"  cx="431.346" cy="288.535" r="6.209">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd126" gradientUnits="userSpaceOnUse"  cx="372.512" cy="241.713" r="15.673">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd127" gradientUnits="userSpaceOnUse"  cx="372.512" cy="241.714" r="15.673">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd128" gradientUnits="userSpaceOnUse"  cx="372.512" cy="241.713" r="6.209">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd129" gradientUnits="userSpaceOnUse"  cx="372.512" cy="241.713" r="6.209">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd130" gradientUnits="userSpaceOnUse"  cx="415.672" cy="211.748" r="15.673">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd131" gradientUnits="userSpaceOnUse"  cx="415.672" cy="211.748" r="15.673">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd132" gradientUnits="userSpaceOnUse"  cx="415.671" cy="211.748" r="6.209">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd133" gradientUnits="userSpaceOnUse"  cx="415.671" cy="211.748" r="6.209">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd134" gradientUnits="userSpaceOnUse"  cx="700.581" cy="304.209" r="15.673">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd135" gradientUnits="userSpaceOnUse"  cx="700.581" cy="304.209" r="15.673">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd136" gradientUnits="userSpaceOnUse"  cx="700.581" cy="304.209" r="6.209">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd137" gradientUnits="userSpaceOnUse"  cx="700.581" cy="304.209" r="6.209">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd138" gradientUnits="userSpaceOnUse"  cx="582.181" cy="393.669" r="15.673">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd139" gradientUnits="userSpaceOnUse"  cx="582.181" cy="393.669" r="15.673">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd140" gradientUnits="userSpaceOnUse"  cx="582.181" cy="393.67" r="6.209">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd141" gradientUnits="userSpaceOnUse"  cx="582.181" cy="393.669" r="6.209">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd142" gradientUnits="userSpaceOnUse"  cx="541.4" cy="408.429" r="15.673">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd143" gradientUnits="userSpaceOnUse"  cx="541.4" cy="408.429" r="15.673">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd144" gradientUnits="userSpaceOnUse"  cx="541.4" cy="408.43" r="6.209">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd145" gradientUnits="userSpaceOnUse"  cx="541.4" cy="408.43" r="6.209">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd146" gradientUnits="userSpaceOnUse"  cx="802.7" cy="453.224" r="22.722">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd147" gradientUnits="userSpaceOnUse"  cx="802.701" cy="453.224" r="22.722">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd148" gradientUnits="userSpaceOnUse"  cx="802.701" cy="453.224" r="9.002">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd149" gradientUnits="userSpaceOnUse"  cx="802.701" cy="453.224" r="9.002">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd150" gradientUnits="userSpaceOnUse"  cx="595.425" cy="338.613" r="17.151">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd151" gradientUnits="userSpaceOnUse"  cx="595.425" cy="338.613" r="17.151">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd152" gradientUnits="userSpaceOnUse"  cx="595.426" cy="338.613" r="6.795">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd153" gradientUnits="userSpaceOnUse"  cx="595.426" cy="338.613" r="6.795">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd154" gradientUnits="userSpaceOnUse"  cx="454.744" cy="217.671" r="5.923">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd155" gradientUnits="userSpaceOnUse"  cx="454.744" cy="217.672" r="5.923">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd156" gradientUnits="userSpaceOnUse"  cx="454.744" cy="217.672" r="2.347">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd157" gradientUnits="userSpaceOnUse"  cx="454.744" cy="217.671" r="2.347">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd158" gradientUnits="userSpaceOnUse"  cx="347.072" cy="186.98" r="5.923">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd159" gradientUnits="userSpaceOnUse"  cx="347.072" cy="186.98" r="5.923">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd160" gradientUnits="userSpaceOnUse"  cx="347.072" cy="186.98" r="2.347">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd161" gradientUnits="userSpaceOnUse"  cx="347.072" cy="186.98" r="2.347">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd162" gradientUnits="userSpaceOnUse"  cx="457.648" cy="427.554" r="5.923">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd163" gradientUnits="userSpaceOnUse"  cx="457.648" cy="427.554" r="5.924">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd164" gradientUnits="userSpaceOnUse"  cx="457.648" cy="427.554" r="2.347">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd165" gradientUnits="userSpaceOnUse"  cx="457.648" cy="427.554" r="2.347">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd166" gradientUnits="userSpaceOnUse"  cx="549.724" cy="464.227" r="5.924">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd167" gradientUnits="userSpaceOnUse"  cx="549.725" cy="464.227" r="5.924">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd168" gradientUnits="userSpaceOnUse"  cx="549.724" cy="464.227" r="2.347">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd169" gradientUnits="userSpaceOnUse"  cx="549.724" cy="464.227" r="2.347">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd170" gradientUnits="userSpaceOnUse"  cx="457.788" cy="312.534" r="5.923">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd171" gradientUnits="userSpaceOnUse"  cx="457.788" cy="312.534" r="5.923">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd172" gradientUnits="userSpaceOnUse"  cx="457.788" cy="312.534" r="2.347">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd173" gradientUnits="userSpaceOnUse"  cx="457.788" cy="312.534" r="2.347">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd174" gradientUnits="userSpaceOnUse"  cx="451.724" cy="278.932" r="5.923">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd175" gradientUnits="userSpaceOnUse"  cx="451.724" cy="278.932" r="5.923">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd176" gradientUnits="userSpaceOnUse"  cx="451.724" cy="278.932" r="2.347">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd177" gradientUnits="userSpaceOnUse"  cx="451.724" cy="278.932" r="2.347">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd178" gradientUnits="userSpaceOnUse"  cx="706.505" cy="464.227" r="5.923">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd179" gradientUnits="userSpaceOnUse"  cx="706.505" cy="464.227" r="5.924">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd180" gradientUnits="userSpaceOnUse"  cx="706.505" cy="464.227" r="2.347">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd181" gradientUnits="userSpaceOnUse"  cx="706.505" cy="464.227" r="2.347">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd182" gradientUnits="userSpaceOnUse"  cx="689.35" cy="375.964" r="4.261">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd183" gradientUnits="userSpaceOnUse"  cx="689.35" cy="375.964" r="4.261">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd184" gradientUnits="userSpaceOnUse"  cx="689.35" cy="375.964" r="1.688">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd185" gradientUnits="userSpaceOnUse"  cx="689.35" cy="375.964" r="1.688">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd186" gradientUnits="userSpaceOnUse"  cx="753.25" cy="373.163" r="4.261">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd187" gradientUnits="userSpaceOnUse"  cx="753.25" cy="373.163" r="4.261">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd188" gradientUnits="userSpaceOnUse"  cx="753.25" cy="373.163" r="1.688">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd189" gradientUnits="userSpaceOnUse"  cx="753.25" cy="373.163" r="1.688">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd190" gradientUnits="userSpaceOnUse"  cx="568.746" cy="241.713" r="4.261">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd191" gradientUnits="userSpaceOnUse"  cx="568.746" cy="241.713" r="4.261">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd192" gradientUnits="userSpaceOnUse"  cx="568.746" cy="241.713" r="1.688">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd193" gradientUnits="userSpaceOnUse"  cx="568.746" cy="241.713" r="1.688">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd194" gradientUnits="userSpaceOnUse"  cx="462.911" cy="368.111" r="4.261">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd195" gradientUnits="userSpaceOnUse"  cx="462.911" cy="368.111" r="4.261">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd196" gradientUnits="userSpaceOnUse"  cx="462.911" cy="368.111" r="1.688">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd197" gradientUnits="userSpaceOnUse"  cx="462.911" cy="368.111" r="1.688">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd198" gradientUnits="userSpaceOnUse"  cx="391.533" cy="248.956" r="4.261">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd199" gradientUnits="userSpaceOnUse"  cx="391.533" cy="248.956" r="4.261">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd200" gradientUnits="userSpaceOnUse"  cx="391.533" cy="248.955" r="1.688">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd201" gradientUnits="userSpaceOnUse"  cx="391.533" cy="248.955" r="1.688">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd202" gradientUnits="userSpaceOnUse"  cx="571.933" cy="324.281" r="4.261">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd203" gradientUnits="userSpaceOnUse"  cx="571.933" cy="324.281" r="4.261">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd204" gradientUnits="userSpaceOnUse"  cx="571.933" cy="324.281" r="1.688">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd205" gradientUnits="userSpaceOnUse"  cx="571.933" cy="324.281" r="1.688">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd206" gradientUnits="userSpaceOnUse"  cx="641.145" cy="389.408" r="4.261">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd207" gradientUnits="userSpaceOnUse"  cx="641.145" cy="389.408" r="4.261">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd208" gradientUnits="userSpaceOnUse"  cx="641.146" cy="389.408" r="1.688">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd209" gradientUnits="userSpaceOnUse"  cx="641.146" cy="389.408" r="1.688">
          <stop offset="0" stop-color="#ffffff"  />
          <stop offset="0.721" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd210" gradientUnits="userSpaceOnUse"  cx="904.585" cy="652.858" r="35.636">
          <stop offset="0.746" stop-color="#ffffff"  />
          <stop offset="1" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd211" gradientUnits="userSpaceOnUse"  cx="1050.787" cy="582.3" r="52.084">
          <stop offset="0.803" stop-color="#ffffff"  />
          <stop offset="1" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="grd212" gradientUnits="userSpaceOnUse"  cx="1244.583" cy="785.429" r="84.197">
          <stop offset="0.803" stop-color="#ffffff"  />
          <stop offset="1" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
      </defs>
      <g id="BACKGROUND">
        <g id="&lt;Group&gt;">
          <path id="background" class="shp0" d="M1500 0L0 0L0 1000L1500 1000L1500 0Z" />
          <g id="&lt;Group&gt;">
            <g id="&lt;Group&gt;">
              <g id="&lt;Group&gt;">
                <use id="&lt;Image&gt;" href="#img1" transform="matrix(0.48,0,0,0.48,1048.368,646.313)"/>
              </g>
              <path id="&lt;Path&gt;" class="shp1" d="M1142.01 718.31L1140.02 737.55L1120.37 739.96L1140.49 741.56L1142.01 761.6L1144.28 741.56L1163.66 739.96L1144.17 737.32L1142.01 718.31Z" />
            </g>
            <g id="&lt;Group&gt;">
              <g id="&lt;Group&gt;">
                <use id="&lt;Image&gt;" href="#img1" transform="matrix(0.48,0,0,0.48,640.152,222.032)"/>
              </g>
              <path id="&lt;Path&gt;" class="shp1" d="M733.8 294.03L731.81 313.27L712.15 315.68L732.28 317.27L733.8 337.32L736.07 317.27L755.44 315.68L735.95 313.04L733.8 294.03Z" />
            </g>
            <g id="&lt;Group&gt;">
              <g id="&lt;Group&gt;">
                <use id="&lt;Image&gt;" href="#img1" transform="matrix(0.48,0,0,0.48,689.315,402.746)"/>
              </g>
              <path id="&lt;Path&gt;" class="shp1" d="M782.96 474.75L780.97 493.99L761.32 496.39L781.44 497.99L782.96 518.04L785.23 497.99L804.6 496.39L785.11 493.75L782.96 474.75Z" />
            </g>
            <g id="&lt;Group&gt;">
              <g id="&lt;Group&gt;">
                <use id="&lt;Image&gt;" href="#img2" transform="matrix(0.48,0,0,0.48,817.533,413.341)"/>
              </g>
              <path id="&lt;Path&gt;" class="shp1" d="M911.18 485.34L909.19 504.58L889.53 506.99L909.66 508.58L911.18 528.63L913.45 508.58L932.82 506.99L913.33 504.34L911.18 485.34Z" />
            </g>
            <g id="&lt;Group&gt;">
              <g id="&lt;Group&gt;">
                <use id="&lt;Image&gt;" href="#img1" transform="matrix(0.48,0,0,0.48,477.251,200.387)"/>
              </g>
              <path id="&lt;Path&gt;" class="shp1" d="M570.9 272.39L568.9 291.63L549.25 294.03L569.38 295.63L570.9 315.68L573.17 295.63L592.54 294.03L573.05 291.39L570.9 272.39Z" />
            </g>
            <g id="&lt;Group&gt;">
              <g id="&lt;Group&gt;">
                <use id="&lt;Image&gt;" href="#img2" transform="matrix(0.48,0,0,0.48,915.274,580.619)"/>
              </g>
              <path id="&lt;Path&gt;" class="shp1" d="M1008.92 652.62L1006.93 671.86L987.27 674.26L1007.4 675.86L1008.92 695.91L1011.19 675.86L1030.56 674.26L1011.07 671.62L1008.92 652.62Z" />
            </g>
            <g id="&lt;Group&gt;">
              <g id="&lt;Group&gt;">
                <use id="&lt;Image&gt;" href="#img1" transform="matrix(0.48,0,0,0.48,1173.693,767.593)"/>
              </g>
              <path id="&lt;Path&gt;" class="shp1" d="M1267.34 839.59L1265.35 858.83L1245.69 861.24L1265.82 862.84L1267.34 882.88L1269.61 862.84L1288.98 861.24L1269.49 858.6L1267.34 839.59Z" />
            </g>
            <g id="&lt;Group&gt;">
              <g id="&lt;Group&gt;">
                <use id="&lt;Image&gt;" href="#img3" transform="matrix(0.48,0,0,0.48,889.548,491.902)"/>
              </g>
              <path id="&lt;Path&gt;" class="shp1" d="M978.67 563.9L977.09 579.12L961.55 581.02L977.47 582.29L978.67 598.14L980.46 582.29L995.79 581.02L980.37 578.93L978.67 563.9Z" />
            </g>
            <g id="&lt;Group&gt;">
              <g id="&lt;Group&gt;">
                <use id="&lt;Image&gt;" href="#img3" transform="matrix(0.48,0,0,0.48,540.002,305.521)"/>
              </g>
              <path id="&lt;Path&gt;" class="shp1" d="M629.12 377.52L627.55 392.74L612 394.64L627.92 395.9L629.12 411.76L630.92 395.9L646.24 394.64L630.83 392.55L629.12 377.52Z" />
            </g>
            <g id="&lt;Group&gt;">
              <g id="&lt;Group&gt;">
                <use id="&lt;Image&gt;" href="#img3" transform="matrix(0.48,0,0,0.48,286.6,53.13)"/>
              </g>
              <path id="&lt;Path&gt;" class="shp1" d="M375.72 125.13L374.15 140.35L358.6 142.25L374.52 143.51L375.72 159.37L377.52 143.51L392.84 142.25L377.42 140.16L375.72 125.13Z" />
            </g>
            <g id="&lt;Group&gt;">
              <g id="&lt;Group&gt;">
                <use id="&lt;Image&gt;" href="#img3" transform="matrix(0.48,0,0,0.48,1003.229,585.144)"/>
              </g>
              <path id="&lt;Path&gt;" class="shp1" d="M1092.35 657.14L1090.77 672.36L1075.23 674.26L1091.15 675.53L1092.35 691.38L1094.15 675.53L1109.47 674.26L1094.05 672.17L1092.35 657.14Z" />
            </g>
            <g id="&lt;Group&gt;">
              <g id="&lt;Group&gt;">
                <use id="&lt;Image&gt;" href="#img3" transform="matrix(0.48,0,0,0.48,1246.001,733.354)"/>
              </g>
              <path id="&lt;Path&gt;" class="shp1" d="M1335.12 805.35L1333.55 820.57L1318 822.47L1333.92 823.74L1335.12 839.59L1336.92 823.74L1352.24 822.47L1336.82 820.38L1335.12 805.35Z" />
            </g>
            <g id="&lt;Group&gt;">
              <g id="&lt;Group&gt;">
                <use id="&lt;Image&gt;" href="#img1" transform="matrix(0.48,0,0,0.48,361.41,120.671)"/>
              </g>
              <path id="&lt;Path&gt;" class="shp1" d="M455.05 192.67L453.06 211.91L433.41 214.32L453.54 215.91L455.05 235.96L457.33 215.91L476.7 214.32L457.21 211.67L455.05 192.67Z" />
            </g>
            <g id="&lt;Group&gt;">
              <g id="&lt;Group&gt;">
                <use id="&lt;Image&gt;" href="#img1" transform="matrix(0.48,0,0,0.48,374.08,529.447)"/>
              </g>
              <path id="&lt;Path&gt;" class="shp1" d="M467.72 601.45L465.73 620.69L446.08 623.09L466.21 624.69L467.72 644.74L470 624.69L489.37 623.09L469.88 620.45L467.72 601.45Z" />
            </g>
            <g id="&lt;Group&gt;">
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M705.74 360.21L705.13 366.08L699.14 366.82L705.28 367.3L705.74 373.42L706.43 367.3L712.34 366.82L706.4 366.01L705.74 360.21Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M592.92 512.74L592.31 518.61L586.32 519.34L592.46 519.83L592.92 525.95L593.61 519.83L599.52 519.34L593.58 518.54L592.92 512.74Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M601.66 499.39L601.05 505.26L595.05 505.99L601.19 506.48L601.66 512.59L602.35 506.48L608.26 505.99L602.31 505.18L601.66 499.39Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M638.61 574.91L638.01 580.78L632.01 581.51L638.15 582L638.61 588.11L639.31 582L645.22 581.51L639.27 580.7L638.61 574.91Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M637.51 722L636.91 727.86L630.91 728.6L637.05 729.09L637.51 735.2L638.21 729.09L644.11 728.6L638.17 727.79L637.51 722Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M410.15 639.96L409.55 645.83L403.55 646.57L409.69 647.05L410.15 653.17L410.85 647.05L416.75 646.57L410.81 645.76L410.15 639.96Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M337.75 561.07L337.14 566.94L331.15 567.68L337.29 568.16L337.75 574.28L338.44 568.16L344.35 567.68L338.41 566.87L337.75 561.07Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M375.1 532.79L374.49 538.66L368.5 539.39L374.64 539.88L375.1 546L375.79 539.88L381.7 539.39L375.76 538.59L375.1 532.79Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M390.1 442.62L389.5 448.49L383.5 449.22L389.64 449.71L390.1 455.82L390.8 449.71L396.71 449.22L390.76 448.42L390.1 442.62Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M461.33 143.22L460.72 149.09L454.73 149.82L460.87 150.31L461.33 156.42L462.02 150.31L467.93 149.82L461.99 149.01L461.33 143.22Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M541.73 205.53L541.12 211.4L535.13 212.13L541.27 212.62L541.73 218.74L542.42 212.62L548.33 212.13L542.39 211.33L541.73 205.53Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M405.79 317.29L405.18 323.16L399.19 323.89L405.33 324.38L405.79 330.5L406.48 324.38L412.39 323.89L406.45 323.09L405.79 317.29Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M669.68 235.68L669.07 241.55L663.07 242.28L669.21 242.77L669.68 248.89L670.37 242.77L676.28 242.28L670.33 241.48L669.68 235.68Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M681.04 390.09L680.43 395.96L674.44 396.7L680.58 397.18L681.04 403.3L681.73 397.18L687.64 396.7L681.7 395.89L681.04 390.09Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M454.93 475.46L454.32 481.33L448.33 482.06L454.47 482.55L454.93 488.66L455.62 482.55L461.53 482.06L455.59 481.25L454.93 475.46Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M508.48 418.01L507.88 423.87L501.88 424.61L508.02 425.1L508.48 431.21L509.18 425.1L515.09 424.61L509.14 423.8L508.48 418.01Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M527.4 406.92L526.8 412.79L520.8 413.53L526.94 414.01L527.4 420.13L528.1 414.01L534.01 413.53L528.06 412.72L527.4 406.92Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M524.77 469.28L524.16 475.15L518.17 475.88L524.3 476.37L524.77 482.49L525.46 476.37L531.37 475.88L525.42 475.08L524.77 469.28Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M556.87 319.8L556.26 325.67L550.27 326.4L556.41 326.89L556.87 333.01L557.56 326.89L563.47 326.4L557.53 325.6L556.87 319.8Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M674.47 449.01L673.86 454.88L667.87 455.61L674.01 456.1L674.47 462.22L675.16 456.1L681.07 455.61L675.13 454.81L674.47 449.01Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M698.48 485.28L697.88 491.15L691.88 491.88L698.02 492.37L698.48 498.48L699.18 492.37L705.08 491.88L699.14 491.07L698.48 485.28Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M490.75 341.14L490.14 347.01L484.15 347.74L490.29 348.23L490.75 354.34L491.44 348.23L497.35 347.74L491.41 346.93L490.75 341.14Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M828.18 493.46L827.57 499.32L821.58 500.06L827.72 500.54L828.18 506.66L828.87 500.54L834.78 500.06L828.84 499.25L828.18 493.46Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M820.46 436.8L819.85 442.67L813.86 443.4L820 443.89L820.46 450L821.15 443.89L827.06 443.4L821.12 442.6L820.46 436.8Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M641.92 363.08L641.32 368.94L635.32 369.68L641.46 370.17L641.92 376.28L642.62 370.17L648.53 369.68L642.58 368.87L641.92 363.08Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M1011.52 654.84L1010.92 660.71L1004.92 661.44L1011.06 661.93L1011.52 668.05L1012.22 661.93L1018.13 661.44L1012.18 660.64L1011.52 654.84Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M1043.11 662.45L1042.5 668.32L1036.51 669.05L1042.65 669.54L1043.11 675.66L1043.8 669.54L1049.71 669.05L1043.77 668.25L1043.11 662.45Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M1038.26 679.5L1037.65 685.37L1031.65 686.1L1037.79 686.59L1038.26 692.71L1038.95 686.59L1044.86 686.1L1038.91 685.3L1038.26 679.5Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M1096.63 720.44L1096.02 726.3L1090.02 727.04L1096.16 727.52L1096.63 733.64L1097.32 727.52L1103.23 727.04L1097.28 726.23L1096.63 720.44Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M1245.85 787.49L1245.24 793.36L1239.25 794.1L1245.39 794.58L1245.85 800.7L1246.54 794.58L1252.45 794.1L1246.51 793.29L1245.85 787.49Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M1206.35 803.78L1205.74 809.65L1199.75 810.38L1205.89 810.87L1206.35 816.98L1207.04 810.87L1212.95 810.38L1207.01 809.57L1206.35 803.78Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M771.46 481.15L770.85 487.02L764.86 487.75L771 488.24L771.46 494.35L772.15 488.24L778.06 487.75L772.12 486.95L771.46 481.15Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M734.2 352.71L733.59 358.58L727.6 359.32L733.74 359.8L734.2 365.92L734.89 359.8L740.8 359.32L734.86 358.51L734.2 352.71Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M838.19 516.17L837.59 522.04L831.59 522.77L837.73 523.26L838.19 529.37L838.89 523.26L844.8 522.77L838.85 521.97L838.19 516.17Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M1010.91 781.65L1010.31 787.52L1004.31 788.25L1010.45 788.74L1010.91 794.86L1011.61 788.74L1017.52 788.25L1011.57 787.45L1010.91 781.65Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M867.53 601.9L866.92 607.77L860.92 608.5L867.06 608.99L867.53 615.1L868.22 608.99L874.13 608.5L868.18 607.7L867.53 601.9Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M1070.96 751.41L1070.35 757.28L1064.36 758.01L1070.5 758.5L1070.96 764.61L1071.65 758.5L1077.56 758.01L1071.62 757.21L1070.96 751.41Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M1213.36 855.98L1212.75 861.85L1206.76 862.58L1212.9 863.07L1213.36 869.18L1214.05 863.07L1219.96 862.58L1214.02 861.78L1213.36 855.98Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M1159.01 836.67L1158.41 842.54L1152.41 843.27L1158.55 843.76L1159.01 849.88L1159.71 843.76L1165.61 843.27L1159.67 842.47L1159.01 836.67Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M1176.34 844.47L1175.73 850.34L1169.73 851.08L1175.87 851.56L1176.34 857.68L1177.03 851.56L1182.94 851.08L1176.99 850.27L1176.34 844.47Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M1334.44 933.33L1333.83 939.2L1327.83 939.93L1333.97 940.42L1334.44 946.53L1335.13 940.42L1341.04 939.93L1335.09 939.13L1334.44 933.33Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M1363.28 936.16L1362.67 942.02L1356.68 942.76L1362.81 943.25L1363.28 949.36L1363.97 943.25L1369.88 942.76L1363.93 941.95L1363.28 936.16Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M438.97 159.07L438.36 164.93L432.37 165.67L438.51 166.16L438.97 172.27L439.66 166.16L445.57 165.67L439.63 164.86L438.97 159.07Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M452.58 168.33L451.97 174.2L445.98 174.93L452.12 175.42L452.58 181.54L453.27 175.42L459.18 174.93L453.24 174.13L452.58 168.33Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M355.59 88.46L354.98 94.32L348.99 95.06L355.13 95.55L355.59 101.66L356.28 95.55L362.19 95.06L356.25 94.25L355.59 88.46Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M232 94.32L231.4 100.19L225.4 100.92L231.54 101.41L232 107.52L232.7 101.41L238.61 100.92L232.66 100.11L232 94.32Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M207.56 77.67L206.95 83.54L200.96 84.27L207.1 84.76L207.56 90.87L208.25 84.76L214.16 84.27L208.22 83.46L207.56 77.67Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M329.25 118.75L328.64 124.62L322.65 125.35L328.79 125.84L329.25 131.95L329.94 125.84L335.85 125.35L329.91 124.54L329.25 118.75Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M236.55 33.63L235.95 39.5L229.95 40.24L236.09 40.72L236.55 46.84L237.25 40.72L243.15 40.24L237.21 39.43L236.55 33.63Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M105.77 75.15L105.16 81.02L99.17 81.75L105.31 82.24L105.77 88.35L106.46 82.24L112.37 81.75L106.43 80.94L105.77 75.15Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M266 112.41L265.39 118.28L259.4 119.01L265.54 119.5L266 125.61L266.69 119.5L272.6 119.01L266.66 118.2L266 112.41Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M385.24 164.66L384.63 170.53L378.63 171.26L384.77 171.75L385.24 177.86L385.93 171.75L391.84 171.26L385.89 170.45L385.24 164.66Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M140.7 85.8L140.1 91.67L134.1 92.41L140.24 92.89L140.7 99.01L141.4 92.89L147.31 92.41L141.36 91.6L140.7 85.8Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M208.64 55.03L208.04 60.9L202.04 61.63L208.18 62.12L208.64 68.23L209.34 62.12L215.24 61.63L209.3 60.82L208.64 55.03Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M437.24 241.49L436.63 247.36L430.64 248.09L436.77 248.58L437.24 254.69L437.93 248.58L443.84 248.09L437.89 247.29L437.24 241.49Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M556.05 291.92L555.44 297.78L549.45 298.52L555.59 299.01L556.05 305.12L556.74 299.01L562.65 298.52L556.71 297.71L556.05 291.92Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M597.76 376.84L597.16 382.71L591.16 383.44L597.3 383.93L597.76 390.04L598.46 383.93L604.37 383.44L598.42 382.64L597.76 376.84Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M720.53 407.09L719.92 412.96L713.93 413.69L720.07 414.18L720.53 420.29L721.22 414.18L727.13 413.69L721.19 412.89L720.53 407.09Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M760.95 401.57L760.34 407.44L754.35 408.17L760.49 408.66L760.95 414.78L761.64 408.66L767.55 408.17L761.61 407.37L760.95 401.57Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M750.01 415.34L749.4 421.21L743.41 421.95L749.55 422.43L750.01 428.55L750.7 422.43L756.61 421.95L750.67 421.14L750.01 415.34Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M894.07 517.88L893.46 523.75L887.46 524.48L893.6 524.97L894.07 531.09L894.76 524.97L900.67 524.48L894.72 523.68L894.07 517.88Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M1078.12 674.9L1077.52 680.77L1071.52 681.5L1077.66 681.99L1078.12 688.1L1078.82 681.99L1084.73 681.5L1078.78 680.7L1078.12 674.9Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M1116.51 680.48L1115.9 686.35L1109.9 687.09L1116.04 687.57L1116.51 693.69L1117.2 687.57L1123.11 687.09L1117.16 686.28L1116.51 680.48Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M855.99 355.68L855.39 361.54L849.39 362.28L855.53 362.76L855.99 368.88L856.69 362.76L862.6 362.28L856.65 361.47L855.99 355.68Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M827.15 325.81L826.55 331.68L820.55 332.41L826.69 332.9L827.15 339.01L827.85 332.9L833.76 332.41L827.81 331.61L827.15 325.81Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M1069.88 543.33L1069.28 549.2L1063.28 549.93L1069.42 550.42L1069.88 556.53L1070.58 550.42L1076.49 549.93L1070.54 549.12L1069.88 543.33Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M984.52 518.07L983.92 523.93L977.92 524.67L984.06 525.16L984.52 531.27L985.22 525.16L991.13 524.67L985.18 523.86L984.52 518.07Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M1133.24 526.16L1132.63 532.03L1126.64 532.76L1132.78 533.25L1133.24 539.37L1133.93 533.25L1139.84 532.76L1133.9 531.96L1133.24 526.16Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M1303.75 721.66L1303.14 727.53L1297.15 728.26L1303.29 728.75L1303.75 734.86L1304.44 728.75L1310.35 728.26L1304.41 727.45L1303.75 721.66Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M1321.11 737.52L1320.5 743.39L1314.51 744.12L1320.65 744.61L1321.11 750.73L1321.8 744.61L1327.71 744.12L1321.76 743.32L1321.11 737.52Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M1355.86 715.23L1355.25 721.09L1349.26 721.83L1355.39 722.32L1355.86 728.43L1356.55 722.32L1362.46 721.83L1356.51 721.02L1355.86 715.23Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M1107.19 635.86L1106.58 641.73L1100.58 642.46L1106.72 642.95L1107.19 649.07L1107.88 642.95L1113.79 642.46L1107.84 641.66L1107.19 635.86Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M1064.37 625.42L1063.76 631.29L1057.76 632.02L1063.9 632.51L1064.37 638.63L1065.06 632.51L1070.97 632.02L1065.02 631.22L1064.37 625.42Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M1134.92 650.81L1134.31 656.68L1128.31 657.42L1134.45 657.9L1134.92 664.02L1135.61 657.9L1141.52 657.42L1135.57 656.61L1134.92 650.81Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M1208.61 679.39L1208 685.26L1202.01 685.99L1208.15 686.48L1208.61 692.6L1209.3 686.48L1215.21 685.99L1209.27 685.19L1208.61 679.39Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M974.27 440.65L973.66 446.52L967.67 447.26L973.81 447.74L974.27 453.86L974.96 447.74L980.87 447.26L974.93 446.45L974.27 440.65Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M696.03 337.92L695.42 343.79L689.43 344.52L695.56 345.01L696.03 351.12L696.72 345.01L702.63 344.52L696.68 343.72L696.03 337.92Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M698.13 242.26L697.52 248.13L691.53 248.86L697.67 249.35L698.13 255.46L698.82 249.35L704.73 248.86L698.79 248.05L698.13 242.26Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M698.86 213.22L698.26 219.09L692.26 219.82L698.4 220.31L698.86 226.43L699.56 220.31L705.46 219.82L699.52 219.02L698.86 213.22Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M539.43 168.87L538.83 174.73L532.83 175.47L538.97 175.95L539.43 182.07L540.13 175.95L546.03 175.47L540.09 174.66L539.43 168.87Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M511.93 149.97L511.32 155.84L505.33 156.57L511.46 157.06L511.93 163.17L512.62 157.06L518.53 156.57L512.58 155.77L511.93 149.97Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M479.84 88.72L479.23 94.59L473.23 95.32L479.37 95.81L479.84 101.93L480.53 95.81L486.44 95.32L480.49 94.52L479.84 88.72Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M374.2 111.03L373.6 116.9L367.6 117.64L373.74 118.12L374.2 124.24L374.9 118.12L380.81 117.64L374.86 116.83L374.2 111.03Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M369.67 64.87L369.06 70.74L363.06 71.47L369.2 71.96L369.67 78.07L370.36 71.96L376.27 71.47L370.32 70.67L369.67 64.87Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M278.7 101.77L278.09 107.63L272.09 108.37L278.23 108.85L278.7 114.97L279.39 108.85L285.3 108.37L279.35 107.56L278.7 101.77Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M214.77 36.41L214.16 42.27L208.16 43.01L214.3 43.5L214.77 49.61L215.46 43.5L221.37 43.01L215.42 42.2L214.77 36.41Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M386.32 265.03L385.72 270.9L379.72 271.63L385.86 272.12L386.32 278.24L387.02 272.12L392.93 271.63L386.98 270.83L386.32 265.03Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M414.13 353.47L413.52 359.34L407.53 360.08L413.67 360.56L414.13 366.68L414.82 360.56L420.73 360.08L414.79 359.27L414.13 353.47Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M321.08 304.61L320.48 310.48L314.48 311.21L320.62 311.7L321.08 317.81L321.78 311.7L327.68 311.21L321.74 310.4L321.08 304.61Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M825.67 553.54L825.06 559.4L819.07 560.14L825.21 560.63L825.67 566.74L826.36 560.63L832.27 560.14L826.32 559.33L825.67 553.54Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M992.14 681.72L991.54 687.59L985.54 688.32L991.68 688.81L992.14 694.93L992.84 688.81L998.75 688.32L992.8 687.52L992.14 681.72Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M1018.23 700.2L1017.62 706.06L1011.63 706.8L1017.77 707.29L1018.23 713.4L1018.92 707.29L1024.83 706.8L1018.89 705.99L1018.23 700.2Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M976.01 640.48L975.4 646.35L969.41 647.08L975.55 647.57L976.01 653.68L976.7 647.57L982.61 647.08L976.67 646.27L976.01 640.48Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M1177.74 677.65L1177.13 683.52L1171.13 684.25L1177.27 684.74L1177.74 690.85L1178.43 684.74L1184.34 684.25L1178.39 683.44L1177.74 677.65Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M1180.17 751.67L1179.56 757.54L1173.57 758.27L1179.71 758.76L1180.17 764.88L1180.86 758.76L1186.77 758.27L1180.83 757.47L1180.17 751.67Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M1178.35 792.66L1177.74 798.52L1171.75 799.26L1177.89 799.75L1178.35 805.86L1179.04 799.75L1184.95 799.26L1179.01 798.45L1178.35 792.66Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M1293.44 864.78L1292.84 870.65L1286.84 871.38L1292.98 871.87L1293.44 877.98L1294.14 871.87L1300.05 871.38L1294.1 870.57L1293.44 864.78Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M1346.51 857.98L1345.9 863.85L1339.91 864.58L1346.05 865.07L1346.51 871.19L1347.2 865.07L1353.11 864.58L1347.17 863.78L1346.51 857.98Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M1377.12 843.85L1376.51 849.71L1370.52 850.45L1376.66 850.93L1377.12 857.05L1377.81 850.93L1383.72 850.45L1377.78 849.64L1377.12 843.85Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M1411.42 854.37L1410.82 860.24L1404.82 860.98L1410.96 861.46L1411.42 867.58L1412.12 861.46L1418.03 860.98L1412.08 860.17L1411.42 854.37Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M1322.03 977.74L1321.42 983.61L1315.43 984.34L1321.57 984.83L1322.03 990.94L1322.72 984.83L1328.63 984.34L1322.69 983.53L1322.03 977.74Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M1298.67 972.44L1298.06 978.31L1292.07 979.04L1298.21 979.53L1298.67 985.64L1299.36 979.53L1305.27 979.04L1299.33 978.24L1298.67 972.44Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M1209.56 892.34L1208.95 898.21L1202.96 898.94L1209.1 899.43L1209.56 905.54L1210.25 899.43L1216.16 898.94L1210.22 898.14L1209.56 892.34Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M869.28 720.35L868.67 726.22L862.67 726.95L868.81 727.44L869.28 733.55L869.97 727.44L875.88 726.95L869.93 726.14L869.28 720.35Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M691.45 580.98L690.85 586.85L684.85 587.59L690.99 588.07L691.45 594.19L692.15 588.07L698.05 587.59L692.11 586.78L691.45 580.98Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M667.66 574.5L667.06 580.37L661.06 581.11L667.2 581.59L667.66 587.71L668.36 581.59L674.26 581.11L668.32 580.3L667.66 574.5Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M740.23 658.33L739.62 664.2L733.63 664.93L739.76 665.42L740.23 671.53L740.92 665.42L746.83 664.93L740.88 664.12L740.23 658.33Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M702.4 647.99L701.79 653.86L695.79 654.59L701.93 655.08L702.4 661.19L703.09 655.08L709 654.59L703.05 653.79L702.4 647.99Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M631.59 637.21L630.98 643.08L624.99 643.81L631.13 644.3L631.59 650.41L632.28 644.3L638.19 643.81L632.24 643.01L631.59 637.21Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M607.52 685.1L606.92 690.97L600.92 691.71L607.06 692.19L607.52 698.31L608.22 692.19L614.12 691.71L608.18 690.9L607.52 685.1Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M544.83 585.2L544.22 591.06L538.23 591.8L544.36 592.28L544.83 598.4L545.52 592.28L551.43 591.8L545.48 590.99L544.83 585.2Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M493.87 573.2L493.26 579.07L487.27 579.8L493.41 580.29L493.87 586.41L494.56 580.29L500.47 579.8L494.53 579L493.87 573.2Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M442.92 494.93L442.32 500.8L436.32 501.53L442.46 502.02L442.92 508.13L443.62 502.02L449.52 501.53L443.58 500.73L442.92 494.93Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M458.73 459.98L458.12 465.85L452.13 466.58L458.27 467.07L458.73 473.19L459.42 467.07L465.33 466.58L459.39 465.78L458.73 459.98Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M299.7 242.7L299.09 248.57L293.1 249.3L299.24 249.79L299.7 255.9L300.39 249.79L306.3 249.3L300.35 248.49L299.7 242.7Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M307.42 205.79L306.81 211.66L300.81 212.39L306.95 212.88L307.42 218.99L308.11 212.88L314.02 212.39L308.07 211.59L307.42 205.79Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M322.76 200.56L322.16 206.43L316.16 207.16L322.3 207.65L322.76 213.76L323.46 207.65L329.37 207.16L323.42 206.36L322.76 200.56Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M365.36 200.26L364.76 206.13L358.76 206.86L364.9 207.35L365.36 213.46L366.06 207.35L371.97 206.86L366.02 206.05L365.36 200.26Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M956.17 455.25L955.56 461.12L949.57 461.85L955.71 462.34L956.17 468.45L956.86 462.34L962.77 461.85L956.83 461.05L956.17 455.25Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M1110.84 476.83L1110.23 482.7L1104.23 483.43L1110.37 483.92L1110.84 490.04L1111.53 483.92L1117.44 483.43L1111.49 482.63L1110.84 476.83Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M1067.15 434.18L1066.54 440.04L1060.54 440.78L1066.68 441.27L1067.15 447.38L1067.84 441.27L1073.75 440.78L1067.8 439.97L1067.15 434.18Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M1017.49 500.22L1016.88 506.09L1010.88 506.82L1017.02 507.31L1017.49 513.43L1018.18 507.31L1024.09 506.82L1018.14 506.02L1017.49 500.22Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M1142.41 694.05L1141.8 699.92L1135.81 700.66L1141.95 701.14L1142.41 707.26L1143.1 701.14L1149.01 700.66L1143.06 699.85L1142.41 694.05Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M1099.36 665.96L1098.76 671.83L1092.76 672.56L1098.9 673.05L1099.36 679.16L1100.06 673.05L1105.97 672.56L1100.02 671.76L1099.36 665.96Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M1097.49 705.76L1096.88 711.62L1090.88 712.36L1097.02 712.85L1097.49 718.96L1098.18 712.85L1104.09 712.36L1098.14 711.55L1097.49 705.76Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M1206.79 777.32L1206.18 783.19L1200.19 783.92L1206.32 784.41L1206.79 790.52L1207.48 784.41L1213.39 783.92L1207.44 783.12L1206.79 777.32Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M816.33 524.69L815.72 530.56L809.73 531.29L815.87 531.78L816.33 537.89L817.02 531.78L822.93 531.29L816.98 530.49L816.33 524.69Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M809.03 505.95L808.42 511.82L802.43 512.55L808.56 513.04L809.03 519.15L809.72 513.04L815.63 512.55L809.68 511.75L809.03 505.95Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M799.37 525.98L798.76 531.85L792.77 532.59L798.91 533.07L799.37 539.19L800.06 533.07L805.97 532.59L800.03 531.78L799.37 525.98Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M766.83 462.83L766.23 468.7L760.23 469.43L766.37 469.92L766.83 476.03L767.53 469.92L773.44 469.43L767.49 468.62L766.83 462.83Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M796.41 450.44L795.8 456.3L789.81 457.04L795.95 457.53L796.41 463.64L797.1 457.53L803.01 457.04L797.07 456.23L796.41 450.44Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M1067.97 562.95L1067.36 568.82L1061.36 569.55L1067.5 570.04L1067.97 576.15L1068.66 570.04L1074.57 569.55L1068.62 568.75L1067.97 562.95Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M1069.93 509.71L1069.33 515.58L1063.33 516.32L1069.47 516.8L1069.93 522.92L1070.63 516.8L1076.54 516.32L1070.59 515.51L1069.93 509.71Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M1047.52 465.25L1046.91 471.12L1040.92 471.86L1047.06 472.34L1047.52 478.46L1048.21 472.34L1054.12 471.86L1048.18 471.05L1047.52 465.25Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M1196.14 530.48L1195.53 536.35L1189.53 537.08L1195.67 537.57L1196.14 543.69L1196.83 537.57L1202.74 537.08L1196.79 536.28L1196.14 530.48Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M1201.31 484.53L1200.71 490.4L1194.71 491.14L1200.85 491.62L1201.31 497.74L1202.01 491.62L1207.92 491.14L1201.97 490.33L1201.31 484.53Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M1219.74 455.46L1219.13 461.33L1213.14 462.07L1219.28 462.55L1219.74 468.67L1220.43 462.55L1226.34 462.07L1220.4 461.26L1219.74 455.46Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M1064.62 295.1L1064.01 300.97L1058.01 301.71L1064.15 302.19L1064.62 308.31L1065.31 302.19L1071.22 301.71L1065.27 300.9L1064.62 295.1Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M1026.72 262.82L1026.12 268.69L1020.12 269.42L1026.26 269.91L1026.72 276.02L1027.42 269.91L1033.32 269.42L1027.38 268.61L1026.72 262.82Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M1151.4 416.3L1150.79 422.17L1144.8 422.9L1150.94 423.39L1151.4 429.5L1152.09 423.39L1158 422.9L1152.05 422.1L1151.4 416.3Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M770.69 371.27L770.08 377.14L764.09 377.87L770.23 378.36L770.69 384.47L771.38 378.36L777.29 377.87L771.35 377.07L770.69 371.27Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M568.48 345.87L567.88 351.74L561.88 352.47L568.02 352.96L568.48 359.07L569.18 352.96L575.09 352.47L569.14 351.67L568.48 345.87Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M540.7 307.54L540.1 313.41L534.1 314.15L540.24 314.63L540.7 320.75L541.4 314.63L547.31 314.15L541.36 313.34L540.7 307.54Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M471.9 119.5L471.29 125.37L465.29 126.11L471.43 126.59L471.9 132.71L472.59 126.59L478.5 126.11L472.55 125.3L471.9 119.5Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M575.96 402.98L575.36 408.85L569.36 409.59L575.5 410.07L575.96 416.19L576.66 410.07L582.57 409.59L576.62 408.78L575.96 402.98Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M358.23 266.31L357.63 272.17L351.63 272.91L357.77 273.4L358.23 279.51L358.93 273.4L364.84 272.91L358.89 272.1L358.23 266.31Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M337.63 349.47L337.02 355.34L331.03 356.07L337.17 356.56L337.63 362.67L338.32 356.56L344.23 356.07L338.29 355.27L337.63 349.47Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M245.05 377.48L244.45 383.35L238.45 384.08L244.59 384.57L245.05 390.69L245.75 384.57L251.66 384.08L245.71 383.28L245.05 377.48Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M245.58 342.9L244.97 348.77L238.98 349.5L245.11 349.99L245.58 356.1L246.27 349.99L252.18 349.5L246.23 348.7L245.58 342.9Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M247.91 298.71L247.3 304.58L241.31 305.31L247.45 305.8L247.91 311.92L248.6 305.8L254.51 305.31L248.57 304.51L247.91 298.71Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M109.56 121.35L108.95 127.22L102.96 127.95L109.1 128.44L109.56 134.56L110.25 128.44L116.16 127.95L110.21 127.15L109.56 121.35Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M66.11 73.74L65.5 79.6L59.51 80.34L65.65 80.82L66.11 86.94L66.8 80.82L72.71 80.34L66.77 79.53L66.11 73.74Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M305.3 169.08L304.7 174.95L298.7 175.68L304.84 176.17L305.3 182.29L306 176.17L311.91 175.68L305.96 174.88L305.3 169.08Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M894.93 644.2L894.32 650.07L888.33 650.8L894.47 651.29L894.93 657.4L895.62 651.29L901.53 650.8L895.59 650L894.93 644.2Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M1105.64 775.65L1105.03 781.52L1099.04 782.25L1105.18 782.74L1105.64 788.85L1106.33 782.74L1112.24 782.25L1106.3 781.44L1105.64 775.65Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M1064.2 604.68L1063.59 610.55L1057.6 611.28L1063.74 611.77L1064.2 617.89L1064.89 611.77L1070.8 611.28L1064.86 610.48L1064.2 604.68Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M916.13 446.09L915.52 451.96L909.53 452.69L915.67 453.18L916.13 459.29L916.82 453.18L922.73 452.69L916.78 451.88L916.13 446.09Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M994.85 549.23L994.25 555.1L988.25 555.84L994.39 556.32L994.85 562.44L995.55 556.32L1001.46 555.84L995.51 555.03L994.85 549.23Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M978.98 564.85L978.37 570.72L972.37 571.45L978.51 571.94L978.98 578.06L979.67 571.94L985.58 571.45L979.63 570.65L978.98 564.85Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M959.55 550.79L958.94 556.66L952.95 557.39L959.08 557.88L959.55 563.99L960.24 557.88L966.15 557.39L960.2 556.59L959.55 550.79Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M955.76 603.16L955.15 609.03L949.16 609.76L955.3 610.25L955.76 616.36L956.45 610.25L962.36 609.76L956.42 608.96L955.76 603.16Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M970.79 596.6L970.18 602.47L964.19 603.2L970.33 603.69L970.79 609.81L971.48 603.69L977.39 603.2L971.45 602.4L970.79 596.6Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M857.31 493.8L856.7 499.67L850.71 500.4L856.85 500.89L857.31 507.01L858 500.89L863.91 500.4L857.97 499.6L857.31 493.8Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M678.11 321.76L677.51 327.63L671.51 328.36L677.65 328.85L678.11 334.96L678.81 328.85L684.71 328.36L678.77 327.55L678.11 321.76Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M874.44 527.89L873.83 533.75L867.84 534.49L873.98 534.98L874.44 541.09L875.13 534.98L881.04 534.49L875.1 533.68L874.44 527.89Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M896.89 542.7L896.29 548.57L890.29 549.3L896.43 549.79L896.89 555.9L897.59 549.79L903.5 549.3L897.55 548.49L896.89 542.7Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M653.6 322.46L652.99 328.33L646.99 329.06L653.13 329.55L653.6 335.66L654.29 329.55L660.2 329.06L654.25 328.25L653.6 322.46Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M880.19 480L879.58 485.87L873.59 486.6L879.73 487.09L880.19 493.21L880.88 487.09L886.79 486.6L880.85 485.8L880.19 480Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M847.36 436.98L846.75 442.85L840.76 443.58L846.9 444.07L847.36 450.18L848.05 444.07L853.96 443.58L848.02 442.78L847.36 436.98Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M598.02 261.4L597.42 267.27L591.42 268L597.56 268.49L598.02 274.6L598.72 268.49L604.63 268L598.68 267.2L598.02 261.4Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M581.17 265.57L580.56 271.44L574.57 272.17L580.71 272.66L581.17 278.78L581.86 272.66L587.77 272.17L581.83 271.37L581.17 265.57Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M523.4 254.12L522.8 259.99L516.8 260.72L522.94 261.21L523.4 267.32L524.1 261.21L530 260.72L524.06 259.91L523.4 254.12Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M487.65 212.74L487.05 218.61L481.05 219.34L487.19 219.83L487.65 225.94L488.35 219.83L494.26 219.34L488.31 218.53L487.65 212.74Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M476.27 239.43L475.66 245.3L469.67 246.04L475.81 246.52L476.27 252.64L476.96 246.52L482.87 246.04L476.93 245.23L476.27 239.43Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M426.73 208.13L426.13 214L420.13 214.74L426.27 215.22L426.73 221.34L427.43 215.22L433.34 214.74L427.39 213.93L426.73 208.13Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M590.27 289.82L589.66 295.69L583.66 296.42L589.8 296.91L590.27 303.02L590.96 296.91L596.87 296.42L590.92 295.62L590.27 289.82Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M506.08 230.4L505.47 236.27L499.48 237L505.62 237.49L506.08 243.61L506.77 237.49L512.68 237L506.74 236.2L506.08 230.4Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M527.24 225.86L526.63 231.73L520.63 232.47L526.77 232.95L527.24 239.07L527.93 232.95L533.84 232.47L527.89 231.66L527.24 225.86Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M1010.85 577.19L1010.24 583.06L1004.25 583.8L1010.39 584.28L1010.85 590.4L1011.54 584.28L1017.45 583.8L1011.5 582.99L1010.85 577.19Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M1225.89 708.68L1225.28 714.55L1219.28 715.28L1225.42 715.77L1225.89 721.88L1226.58 715.77L1232.49 715.28L1226.54 714.47L1225.89 708.68Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M1282.86 793.79L1282.25 799.66L1276.25 800.4L1282.39 800.88L1282.86 807L1283.55 800.88L1289.46 800.4L1283.51 799.59L1282.86 793.79Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M1179.78 729.6L1179.17 735.47L1173.18 736.21L1179.32 736.69L1179.78 742.81L1180.47 736.69L1186.38 736.21L1180.44 735.4L1179.78 729.6Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M1263.3 825.35L1262.69 831.21L1256.7 831.95L1262.84 832.44L1263.3 838.55L1263.99 832.44L1269.9 831.95L1263.96 831.14L1263.3 825.35Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M1359.37 894.6L1358.77 900.46L1352.77 901.2L1358.91 901.69L1359.37 907.8L1360.07 901.69L1365.97 901.2L1360.03 900.39L1359.37 894.6Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M1351.33 917.21L1350.72 923.07L1344.73 923.81L1350.87 924.3L1351.33 930.41L1352.02 924.3L1357.93 923.81L1351.99 923L1351.33 917.21Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M1246.5 824.3L1245.89 830.16L1239.9 830.9L1246.04 831.39L1246.5 837.5L1247.19 831.39L1253.1 830.9L1247.16 830.09L1246.5 824.3Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M1417.14 929.59L1416.54 935.46L1410.54 936.2L1416.68 936.68L1417.14 942.8L1417.84 936.68L1423.75 936.2L1417.8 935.39L1417.14 929.59Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M1433.89 945.3L1433.28 951.17L1427.29 951.9L1433.43 952.39L1433.89 958.5L1434.58 952.39L1440.49 951.9L1434.55 951.1L1433.89 945.3Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M1340.86 902.83L1340.25 908.7L1334.25 909.44L1340.39 909.92L1340.86 916.04L1341.55 909.92L1347.46 909.44L1341.51 908.63L1340.86 902.83Z" />
              </g>
            </g>
            <g id="&lt;Group&gt;" style="opacity: 0.502">
              <g id="&lt;Group&gt;" style="opacity: 0.8">
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp2" d="M1120.85 693.26C1120.85 731.9 1127.87 763.22 1136.52 763.22C1145.18 763.22 1152.2 731.9 1152.2 693.26C1152.2 654.62 1145.18 623.3 1136.52 623.3C1127.87 623.3 1120.85 654.62 1120.85 693.26Z" />
                  <path id="&lt;Path&gt;" class="shp3" d="M1136.52 677.59C1097.88 677.59 1066.56 684.61 1066.56 693.26C1066.56 701.92 1097.88 708.94 1136.52 708.94C1175.16 708.94 1206.49 701.92 1206.49 693.26C1206.49 684.61 1175.16 677.59 1136.52 677.59Z" />
                  <path id="&lt;Path&gt;" class="shp4" d="M1131.71 688.45C1119.84 700.32 1112.38 712.09 1115.04 714.75C1117.69 717.41 1129.47 709.94 1141.34 698.08C1153.21 686.21 1160.67 674.43 1158.01 671.77C1155.35 669.11 1143.58 676.58 1131.71 688.45Z" />
                  <path id="&lt;Path&gt;" class="shp5" d="M1141.34 688.45C1129.47 676.58 1117.69 669.11 1115.04 671.77C1112.38 674.43 1119.84 686.21 1131.71 698.08C1143.58 709.94 1155.35 717.41 1158.01 714.75C1160.67 712.09 1153.21 700.32 1141.34 688.45Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp6" d="M913.13 743.64C913.13 782.28 920.15 813.6 928.8 813.6C937.46 813.6 944.48 782.28 944.48 743.64C944.48 705 937.46 673.67 928.8 673.67C920.15 673.67 913.13 705 913.13 743.64Z" />
                  <path id="&lt;Path&gt;" class="shp7" d="M928.8 727.96C890.16 727.96 858.84 734.98 858.84 743.64C858.84 752.29 890.16 759.31 928.8 759.31C967.44 759.31 998.77 752.29 998.77 743.64C998.77 734.98 967.44 727.96 928.8 727.96Z" />
                  <path id="&lt;Path&gt;" class="shp8" d="M923.99 738.82C912.12 750.69 904.66 762.47 907.31 765.13C909.97 767.78 921.75 760.32 933.62 748.45C945.48 736.58 952.95 724.81 950.29 722.15C947.63 719.49 935.86 726.95 923.99 738.82Z" />
                  <path id="&lt;Path&gt;" class="shp9" d="M933.62 738.82C921.75 726.95 909.97 719.49 907.31 722.15C904.66 724.81 912.12 736.58 923.99 748.45C935.86 760.32 947.63 767.78 950.29 765.13C952.95 762.47 945.48 750.69 933.62 738.82Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp10" d="M962.28 626.71C962.28 665.35 969.3 696.67 977.96 696.67C986.61 696.67 993.63 665.35 993.63 626.71C993.63 588.07 986.61 556.75 977.96 556.75C969.3 556.75 962.28 588.07 962.28 626.71Z" />
                  <path id="&lt;Path&gt;" class="shp11" d="M977.96 611.04C939.32 611.04 908 618.05 908 626.71C908 635.37 939.32 642.38 977.96 642.38C1016.6 642.38 1047.92 635.37 1047.92 626.71C1047.92 618.05 1016.6 611.04 977.96 611.04Z" />
                  <path id="&lt;Path&gt;" class="shp12" d="M973.14 621.9C961.28 633.76 953.81 645.54 956.47 648.2C959.13 650.86 970.9 643.39 982.77 631.52C994.64 619.66 1002.11 607.88 999.45 605.22C996.79 602.56 985.01 610.03 973.14 621.9Z" />
                  <path id="&lt;Path&gt;" class="shp13" d="M982.77 621.9C970.9 610.03 959.13 602.56 956.47 605.22C953.81 607.88 961.28 619.66 973.14 631.52C985.01 643.39 996.79 650.86 999.45 648.2C1002.11 645.54 994.64 633.76 982.77 621.9Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp14" d="M949.68 591.94C949.68 630.58 956.7 661.91 965.35 661.91C974.01 661.91 981.03 630.58 981.03 591.94C981.03 553.3 974.01 521.98 965.35 521.98C956.7 521.98 949.68 553.3 949.68 591.94Z" />
                  <path id="&lt;Path&gt;" class="shp15" d="M965.35 576.27C926.71 576.27 895.39 583.29 895.39 591.94C895.39 600.6 926.71 607.62 965.35 607.62C1003.99 607.62 1035.32 600.6 1035.32 591.94C1035.32 583.29 1003.99 576.27 965.35 576.27Z" />
                  <path id="&lt;Path&gt;" class="shp16" d="M960.54 587.13C948.67 599 941.21 610.77 943.87 613.43C946.52 616.09 958.3 608.63 970.17 596.76C982.04 584.89 989.5 573.11 986.84 570.45C984.18 567.8 972.41 575.26 960.54 587.13Z" />
                  <path id="&lt;Path&gt;" class="shp17" d="M970.17 587.13C958.3 575.26 946.52 567.8 943.87 570.45C941.21 573.11 948.67 584.89 960.54 596.76C972.41 608.63 984.18 616.09 986.84 613.43C989.5 610.77 982.04 599 970.17 587.13Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp18" d="M839.63 576.27C839.63 614.91 846.64 646.23 855.3 646.23C863.96 646.23 870.97 614.91 870.97 576.27C870.97 537.63 863.96 506.31 855.3 506.31C846.64 506.31 839.63 537.63 839.63 576.27Z" />
                  <path id="&lt;Path&gt;" class="shp19" d="M855.3 560.6C816.66 560.6 785.34 567.61 785.34 576.27C785.34 584.93 816.66 591.94 855.3 591.94C893.94 591.94 925.26 584.93 925.26 576.27C925.26 567.61 893.94 560.6 855.3 560.6Z" />
                  <path id="&lt;Path&gt;" class="shp20" d="M850.49 571.46C838.62 583.32 831.15 595.1 833.81 597.76C836.47 600.42 848.25 592.95 860.11 581.08C871.98 569.22 879.45 557.44 876.79 554.78C874.13 552.12 862.35 559.59 850.49 571.46Z" />
                  <path id="&lt;Path&gt;" class="shp21" d="M860.11 571.46C848.25 559.59 836.47 552.12 833.81 554.78C831.15 557.44 838.62 569.22 850.49 581.08C862.35 592.95 874.13 600.42 876.79 597.76C879.45 595.1 871.98 583.32 860.11 571.46Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp22" d="M780.79 529.45C780.79 568.09 787.81 599.41 796.47 599.41C805.12 599.41 812.14 568.09 812.14 529.45C812.14 490.81 805.12 459.48 796.47 459.48C787.81 459.48 780.79 490.81 780.79 529.45Z" />
                  <path id="&lt;Path&gt;" class="shp23" d="M796.47 513.77C757.83 513.77 726.5 520.79 726.5 529.45C726.5 538.1 757.83 545.12 796.47 545.12C835.1 545.12 866.43 538.1 866.43 529.45C866.43 520.79 835.1 513.77 796.47 513.77Z" />
                  <path id="&lt;Path&gt;" class="shp24" d="M791.65 524.63C779.78 536.5 772.32 548.28 774.98 550.94C777.64 553.59 789.41 546.13 801.28 534.26C813.15 522.39 820.61 510.62 817.95 507.96C815.3 505.3 803.52 512.77 791.65 524.63Z" />
                  <path id="&lt;Path&gt;" class="shp25" d="M801.28 524.63C789.41 512.77 777.64 505.3 774.98 507.96C772.32 510.62 779.78 522.39 791.65 534.26C803.52 546.13 815.3 553.59 817.95 550.94C820.61 548.28 813.15 536.5 801.28 524.63Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp26" d="M823.95 499.48C823.95 538.12 830.97 569.44 839.63 569.44C848.28 569.44 855.3 538.12 855.3 499.48C855.3 460.84 848.28 429.52 839.63 429.52C830.97 429.52 823.95 460.84 823.95 499.48Z" />
                  <path id="&lt;Path&gt;" class="shp27" d="M839.63 483.81C800.99 483.81 769.66 490.82 769.66 499.48C769.66 508.14 800.99 515.16 839.63 515.16C878.26 515.16 909.59 508.14 909.59 499.48C909.59 490.82 878.26 483.81 839.63 483.81Z" />
                  <path id="&lt;Path&gt;" class="shp28" d="M834.81 494.67C822.94 506.53 815.48 518.31 818.14 520.97C820.8 523.63 832.57 516.16 844.44 504.3C856.31 492.43 863.77 480.65 861.11 477.99C858.46 475.33 846.68 482.8 834.81 494.67Z" />
                  <path id="&lt;Path&gt;" class="shp29" d="M844.44 494.67C832.57 482.8 820.8 475.33 818.14 477.99C815.48 480.65 822.94 492.43 834.81 504.3C846.68 516.16 858.46 523.63 861.11 520.97C863.77 518.31 856.31 506.53 844.44 494.67Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp30" d="M1108.86 591.94C1108.86 630.58 1115.88 661.91 1124.54 661.91C1133.19 661.91 1140.21 630.58 1140.21 591.94C1140.21 553.3 1133.19 521.98 1124.54 521.98C1115.88 521.98 1108.86 553.3 1108.86 591.94Z" />
                  <path id="&lt;Path&gt;" class="shp31" d="M1124.54 576.27C1085.9 576.27 1054.57 583.29 1054.57 591.94C1054.57 600.6 1085.9 607.62 1124.54 607.62C1163.17 607.62 1194.5 600.6 1194.5 591.94C1194.5 583.29 1163.17 576.27 1124.54 576.27Z" />
                  <path id="&lt;Path&gt;" class="shp32" d="M1119.72 587.13C1107.85 599 1100.39 610.77 1103.05 613.43C1105.71 616.09 1117.48 608.63 1129.35 596.76C1141.22 584.89 1148.68 573.11 1146.02 570.45C1143.36 567.8 1131.59 575.26 1119.72 587.13Z" />
                  <path id="&lt;Path&gt;" class="shp33" d="M1129.35 587.13C1117.48 575.26 1105.71 567.8 1103.05 570.45C1100.39 573.11 1107.85 584.89 1119.72 596.76C1131.59 608.63 1143.36 616.09 1146.02 613.43C1148.68 610.77 1141.22 599 1129.35 587.13Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp34" d="M990.46 681.4C990.46 720.04 997.48 751.37 1006.13 751.37C1014.79 751.37 1021.81 720.04 1021.81 681.4C1021.81 642.76 1014.79 611.44 1006.13 611.44C997.48 611.44 990.46 642.76 990.46 681.4Z" />
                  <path id="&lt;Path&gt;" class="shp35" d="M1006.13 665.73C967.5 665.73 936.17 672.75 936.17 681.4C936.17 690.06 967.5 697.08 1006.13 697.08C1044.77 697.08 1076.1 690.06 1076.1 681.4C1076.1 672.75 1044.77 665.73 1006.13 665.73Z" />
                  <path id="&lt;Path&gt;" class="shp36" d="M1001.32 676.59C989.45 688.46 981.99 700.23 984.65 702.89C987.31 705.55 999.08 698.09 1010.95 686.22C1022.82 674.35 1030.28 662.57 1027.62 659.91C1024.96 657.26 1013.19 664.72 1001.32 676.59Z" />
                  <path id="&lt;Path&gt;" class="shp37" d="M1010.95 676.59C999.08 664.72 987.31 657.26 984.65 659.91C981.99 662.57 989.45 674.35 1001.32 686.22C1013.19 698.09 1024.96 705.55 1027.62 702.89C1030.28 700.23 1022.82 688.46 1010.95 676.59Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp38" d="M949.68 696.16C949.68 734.8 956.7 766.13 965.35 766.13C974.01 766.13 981.03 734.8 981.03 696.16C981.03 657.52 974.01 626.2 965.35 626.2C956.7 626.2 949.68 657.52 949.68 696.16Z" />
                  <path id="&lt;Path&gt;" class="shp39" d="M965.35 680.49C926.71 680.49 895.39 687.51 895.39 696.16C895.39 704.82 926.71 711.84 965.35 711.84C1003.99 711.84 1035.32 704.82 1035.32 696.16C1035.32 687.51 1003.99 680.49 965.35 680.49Z" />
                  <path id="&lt;Path&gt;" class="shp40" d="M960.54 691.35C948.67 703.22 941.21 714.99 943.87 717.65C946.52 720.31 958.3 712.85 970.17 700.98C982.04 689.11 989.5 677.33 986.84 674.67C984.18 672.02 972.41 679.48 960.54 691.35Z" />
                  <path id="&lt;Path&gt;" class="shp41" d="M970.17 691.35C958.3 679.48 946.52 672.02 943.87 674.67C941.21 677.33 948.67 689.11 960.54 700.98C972.41 712.85 984.18 720.31 986.84 717.65C989.5 714.99 982.04 703.22 970.17 691.35Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp42" d="M1203.93 740.96C1203.93 796.98 1214.1 842.39 1226.65 842.39C1239.2 842.39 1249.38 796.98 1249.38 740.96C1249.38 684.94 1239.2 639.53 1226.65 639.53C1214.1 639.53 1203.93 684.94 1203.93 740.96Z" />
                  <path id="&lt;Path&gt;" class="shp43" d="M1226.65 718.23C1170.64 718.23 1125.22 728.41 1125.22 740.96C1125.22 753.51 1170.64 763.68 1226.65 763.68C1282.67 763.68 1328.09 753.51 1328.09 740.96C1328.09 728.41 1282.67 718.23 1226.65 718.23Z" />
                  <path id="&lt;Path&gt;" class="shp44" d="M1219.68 733.98C1202.47 751.18 1191.65 768.26 1195.5 772.11C1199.36 775.97 1216.43 765.14 1233.63 747.94C1250.84 730.73 1261.66 713.66 1257.81 709.8C1253.95 705.95 1236.88 716.77 1219.68 733.98Z" />
                  <path id="&lt;Path&gt;" class="shp45" d="M1233.63 733.98C1216.43 716.77 1199.36 705.95 1195.5 709.8C1191.65 713.66 1202.47 730.73 1219.68 747.94C1236.88 765.14 1253.95 775.97 1257.81 772.11C1261.66 768.26 1250.84 751.18 1233.63 733.98Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp46" d="M1002.23 626.35C1002.23 668.63 1009.91 702.91 1019.38 702.91C1028.85 702.91 1036.53 668.63 1036.53 626.35C1036.53 584.06 1028.85 549.79 1019.38 549.79C1009.91 549.79 1002.23 584.06 1002.23 626.35Z" />
                  <path id="&lt;Path&gt;" class="shp47" d="M1019.38 609.19C977.1 609.19 942.82 616.87 942.82 626.35C942.82 635.82 977.1 643.5 1019.38 643.5C1061.66 643.5 1095.94 635.82 1095.94 626.35C1095.94 616.87 1061.66 609.19 1019.38 609.19Z" />
                  <path id="&lt;Path&gt;" class="shp48" d="M1014.11 621.08C1001.12 634.07 992.95 646.95 995.86 649.86C998.77 652.77 1011.66 644.6 1024.65 631.61C1037.63 618.63 1045.8 605.74 1042.89 602.83C1039.98 599.92 1027.1 608.09 1014.11 621.08Z" />
                  <path id="&lt;Path&gt;" class="shp49" d="M1024.65 621.08C1011.66 608.09 998.77 599.92 995.86 602.83C992.95 605.74 1001.12 618.63 1014.11 631.61C1027.1 644.6 1039.98 652.77 1042.89 649.86C1045.8 646.95 1037.63 634.07 1024.65 621.08Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp50" d="M872.77 505.41C872.77 520.01 875.43 531.85 878.7 531.85C881.97 531.85 884.62 520.01 884.62 505.41C884.62 490.8 881.97 478.96 878.7 478.96C875.43 478.96 872.77 490.8 872.77 505.41Z" />
                  <path id="&lt;Path&gt;" class="shp51" d="M878.7 499.48C864.09 499.48 852.26 502.13 852.26 505.41C852.26 508.68 864.09 511.33 878.7 511.33C893.3 511.33 905.14 508.68 905.14 505.41C905.14 502.13 893.3 499.48 878.7 499.48Z" />
                  <path id="&lt;Path&gt;" class="shp52" d="M876.88 503.59C872.39 508.07 869.57 512.52 870.58 513.53C871.58 514.53 876.03 511.71 880.52 507.22C885 502.74 887.82 498.29 886.82 497.28C885.81 496.28 881.36 499.1 876.88 503.59Z" />
                  <path id="&lt;Path&gt;" class="shp53" d="M880.52 503.59C876.03 499.1 871.58 496.28 870.58 497.28C869.57 498.29 872.39 502.74 876.88 507.22C881.36 511.71 885.81 514.53 886.82 513.53C887.82 512.52 885 508.07 880.52 503.59Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp54" d="M765.1 474.71C765.1 489.32 767.75 501.16 771.03 501.16C774.3 501.16 776.95 489.32 776.95 474.71C776.95 460.11 774.3 448.27 771.03 448.27C767.75 448.27 765.1 460.11 765.1 474.71Z" />
                  <path id="&lt;Path&gt;" class="shp55" d="M771.03 468.79C756.42 468.79 744.58 471.44 744.58 474.71C744.58 477.99 756.42 480.64 771.03 480.64C785.63 480.64 797.47 477.99 797.47 474.71C797.47 471.44 785.63 468.79 771.03 468.79Z" />
                  <path id="&lt;Path&gt;" class="shp56" d="M769.21 472.89C764.72 477.38 761.9 481.83 762.9 482.84C763.91 483.84 768.36 481.02 772.85 476.53C777.33 472.05 780.15 467.6 779.15 466.59C778.14 465.59 773.69 468.41 769.21 472.89Z" />
                  <path id="&lt;Path&gt;" class="shp57" d="M772.85 472.89C768.36 468.41 763.91 465.59 762.9 466.59C761.9 467.6 764.72 472.05 769.21 476.53C773.69 481.02 778.14 483.84 779.15 482.84C780.15 481.83 777.33 477.38 772.85 472.89Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp58" d="M875.68 715.29C875.68 729.89 878.33 741.73 881.6 741.73C884.87 741.73 887.53 729.89 887.53 715.29C887.53 700.68 884.87 688.85 881.6 688.85C878.33 688.85 875.68 700.68 875.68 715.29Z" />
                  <path id="&lt;Path&gt;" class="shp59" d="M881.6 709.36C867 709.36 855.16 712.02 855.16 715.29C855.16 718.56 867 721.21 881.6 721.21C896.21 721.21 908.04 718.56 908.04 715.29C908.04 712.02 896.21 709.36 881.6 709.36Z" />
                  <path id="&lt;Path&gt;" class="shp60" d="M879.78 713.47C875.3 717.95 872.48 722.4 873.48 723.41C874.49 724.41 878.94 721.59 883.42 717.11C887.91 712.62 890.73 708.17 889.72 707.17C888.72 706.16 884.27 708.98 879.78 713.47Z" />
                  <path id="&lt;Path&gt;" class="shp61" d="M883.42 713.47C878.94 708.98 874.49 706.16 873.48 707.17C872.48 708.17 875.3 712.62 879.78 717.11C884.27 721.59 888.72 724.41 889.72 723.41C890.73 722.4 887.91 717.95 883.42 713.47Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp62" d="M967.75 751.96C967.75 766.56 970.41 778.4 973.68 778.4C976.95 778.4 979.6 766.56 979.6 751.96C979.6 737.36 976.95 725.52 973.68 725.52C970.41 725.52 967.75 737.36 967.75 751.96Z" />
                  <path id="&lt;Path&gt;" class="shp63" d="M973.68 746.04C959.07 746.04 947.24 748.69 947.24 751.96C947.24 755.23 959.07 757.89 973.68 757.89C988.28 757.89 1000.12 755.23 1000.12 751.96C1000.12 748.69 988.28 746.04 973.68 746.04Z" />
                  <path id="&lt;Path&gt;" class="shp64" d="M971.86 750.14C967.37 754.63 964.55 759.08 965.56 760.08C966.56 761.09 971.01 758.27 975.5 753.78C979.98 749.3 982.8 744.84 981.8 743.84C980.8 742.83 976.34 745.66 971.86 750.14Z" />
                  <path id="&lt;Path&gt;" class="shp65" d="M975.5 750.14C971.01 745.66 966.56 742.83 965.56 743.84C964.55 744.84 967.37 749.3 971.86 753.78C976.34 758.27 980.8 761.09 981.8 760.08C982.8 759.08 979.98 754.63 975.5 750.14Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp66" d="M875.82 600.27C875.82 614.87 878.47 626.71 881.74 626.71C885.01 626.71 887.67 614.87 887.67 600.27C887.67 585.66 885.01 573.83 881.74 573.83C878.47 573.83 875.82 585.66 875.82 600.27Z" />
                  <path id="&lt;Path&gt;" class="shp67" d="M881.74 594.34C867.14 594.34 855.3 597 855.3 600.27C855.3 603.54 867.14 606.19 881.74 606.19C896.35 606.19 908.18 603.54 908.18 600.27C908.18 597 896.35 594.34 881.74 594.34Z" />
                  <path id="&lt;Path&gt;" class="shp68" d="M879.92 598.45C875.44 602.93 872.62 607.38 873.62 608.39C874.63 609.39 879.08 606.57 883.56 602.09C888.05 597.6 890.87 593.15 889.86 592.15C888.86 591.14 884.41 593.96 879.92 598.45Z" />
                  <path id="&lt;Path&gt;" class="shp69" d="M883.56 598.45C879.08 593.96 874.63 591.14 873.62 592.15C872.62 593.15 875.44 597.6 879.92 602.09C884.41 606.57 888.86 609.39 889.86 608.39C890.87 607.38 888.05 602.93 883.56 598.45Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp70" d="M869.75 566.67C869.75 581.27 872.41 593.11 875.68 593.11C878.95 593.11 881.6 581.27 881.6 566.67C881.6 552.06 878.95 540.22 875.68 540.22C872.41 540.22 869.75 552.06 869.75 566.67Z" />
                  <path id="&lt;Path&gt;" class="shp71" d="M875.68 560.74C861.07 560.74 849.24 563.39 849.24 566.67C849.24 569.94 861.07 572.59 875.68 572.59C890.28 572.59 902.12 569.94 902.12 566.67C902.12 563.39 890.28 560.74 875.68 560.74Z" />
                  <path id="&lt;Path&gt;" class="shp72" d="M873.86 564.85C869.37 569.33 866.55 573.78 867.56 574.79C868.56 575.79 873.01 572.97 877.5 568.49C881.98 564 884.8 559.55 883.8 558.54C882.79 557.54 878.34 560.36 873.86 564.85Z" />
                  <path id="&lt;Path&gt;" class="shp73" d="M877.5 564.85C873.01 560.36 868.56 557.54 867.56 558.54C866.55 559.55 869.37 564 873.86 568.49C878.34 572.97 882.79 575.79 883.8 574.79C884.8 573.78 881.98 569.33 877.5 564.85Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp74" d="M1124.54 751.96C1124.54 766.56 1127.19 778.4 1130.46 778.4C1133.73 778.4 1136.38 766.56 1136.38 751.96C1136.38 737.36 1133.73 725.52 1130.46 725.52C1127.19 725.52 1124.54 737.36 1124.54 751.96Z" />
                  <path id="&lt;Path&gt;" class="shp75" d="M1130.46 746.04C1115.86 746.04 1104.02 748.69 1104.02 751.96C1104.02 755.23 1115.86 757.89 1130.46 757.89C1145.06 757.89 1156.9 755.23 1156.9 751.96C1156.9 748.69 1145.06 746.04 1130.46 746.04Z" />
                  <path id="&lt;Path&gt;" class="shp76" d="M1128.64 750.14C1124.15 754.63 1121.33 759.08 1122.34 760.08C1123.34 761.09 1127.79 758.27 1132.28 753.78C1136.76 749.3 1139.59 744.84 1138.58 743.84C1137.58 742.83 1133.13 745.66 1128.64 750.14Z" />
                  <path id="&lt;Path&gt;" class="shp77" d="M1132.28 750.14C1127.79 745.66 1123.34 742.83 1122.34 743.84C1121.33 744.84 1124.15 749.3 1128.64 753.78C1133.13 758.27 1137.58 761.09 1138.58 760.08C1139.59 759.08 1136.76 754.63 1132.28 750.14Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp78" d="M1109.04 663.7C1109.04 674.2 1110.95 682.72 1113.3 682.72C1115.66 682.72 1117.57 674.2 1117.57 663.7C1117.57 653.19 1115.66 644.68 1113.3 644.68C1110.95 644.68 1109.04 653.19 1109.04 663.7Z" />
                  <path id="&lt;Path&gt;" class="shp79" d="M1113.3 659.44C1102.8 659.44 1094.28 661.34 1094.28 663.7C1094.28 666.05 1102.8 667.96 1113.3 667.96C1123.81 667.96 1132.33 666.05 1132.33 663.7C1132.33 661.34 1123.81 659.44 1113.3 659.44Z" />
                  <path id="&lt;Path&gt;" class="shp80" d="M1112 662.39C1108.77 665.62 1106.74 668.82 1107.46 669.54C1108.18 670.26 1111.39 668.23 1114.61 665.01C1117.84 661.78 1119.87 658.58 1119.15 657.86C1118.42 657.13 1115.22 659.16 1112 662.39Z" />
                  <path id="&lt;Path&gt;" class="shp81" d="M1114.61 662.39C1111.39 659.16 1108.18 657.13 1107.46 657.86C1106.74 658.58 1108.77 661.78 1112 665.01C1115.22 668.23 1118.42 670.26 1119.15 669.54C1119.87 668.82 1117.84 665.62 1114.61 662.39Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp82" d="M1172.94 660.9C1172.94 671.4 1174.85 679.92 1177.2 679.92C1179.56 679.92 1181.47 671.4 1181.47 660.9C1181.47 650.39 1179.56 641.88 1177.2 641.88C1174.85 641.88 1172.94 650.39 1172.94 660.9Z" />
                  <path id="&lt;Path&gt;" class="shp83" d="M1177.2 656.64C1166.7 656.64 1158.18 658.54 1158.18 660.9C1158.18 663.25 1166.7 665.16 1177.2 665.16C1187.71 665.16 1196.23 663.25 1196.23 660.9C1196.23 658.54 1187.71 656.64 1177.2 656.64Z" />
                  <path id="&lt;Path&gt;" class="shp84" d="M1175.9 659.59C1172.67 662.82 1170.64 666.02 1171.36 666.74C1172.08 667.46 1175.29 665.43 1178.51 662.21C1181.74 658.98 1183.77 655.78 1183.05 655.06C1182.32 654.33 1179.12 656.36 1175.9 659.59Z" />
                  <path id="&lt;Path&gt;" class="shp85" d="M1178.51 659.59C1175.29 656.36 1172.08 654.33 1171.36 655.06C1170.64 655.78 1172.67 658.98 1175.9 662.21C1179.12 665.43 1182.32 667.46 1183.05 666.74C1183.77 666.02 1181.74 662.82 1178.51 659.59Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp86" d="M988.44 529.45C988.44 539.95 990.35 548.47 992.7 548.47C995.05 548.47 996.96 539.95 996.96 529.45C996.96 518.94 995.05 510.43 992.7 510.43C990.35 510.43 988.44 518.94 988.44 529.45Z" />
                  <path id="&lt;Path&gt;" class="shp87" d="M992.7 525.19C982.19 525.19 973.68 527.09 973.68 529.45C973.68 531.8 982.19 533.71 992.7 533.71C1003.2 533.71 1011.72 531.8 1011.72 529.45C1011.72 527.09 1003.2 525.19 992.7 525.19Z" />
                  <path id="&lt;Path&gt;" class="shp88" d="M991.39 528.14C988.16 531.36 986.13 534.57 986.86 535.29C987.58 536.01 990.78 533.98 994.01 530.76C997.24 527.53 999.26 524.33 998.54 523.61C997.82 522.88 994.62 524.91 991.39 528.14Z" />
                  <path id="&lt;Path&gt;" class="shp89" d="M994.01 528.14C990.78 524.91 987.58 522.88 986.86 523.61C986.13 524.33 988.16 527.53 991.39 530.76C994.62 533.98 997.82 536.01 998.54 535.29C999.26 534.57 997.24 531.36 994.01 528.14Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp90" d="M882.6 655.85C882.6 666.35 884.51 674.87 886.86 674.87C889.22 674.87 891.13 666.35 891.13 655.85C891.13 645.34 889.22 636.82 886.86 636.82C884.51 636.82 882.6 645.34 882.6 655.85Z" />
                  <path id="&lt;Path&gt;" class="shp91" d="M886.86 651.58C876.36 651.58 867.84 653.49 867.84 655.85C867.84 658.2 876.36 660.11 886.86 660.11C897.37 660.11 905.89 658.2 905.89 655.85C905.89 653.49 897.37 651.58 886.86 651.58Z" />
                  <path id="&lt;Path&gt;" class="shp92" d="M885.56 654.54C882.33 657.76 880.3 660.96 881.02 661.69C881.75 662.41 884.95 660.38 888.17 657.15C891.4 653.93 893.43 650.73 892.71 650C891.98 649.28 888.78 651.31 885.56 654.54Z" />
                  <path id="&lt;Path&gt;" class="shp93" d="M888.17 654.54C884.95 651.31 881.75 649.28 881.02 650C880.3 650.73 882.33 653.93 885.56 657.15C888.78 660.38 891.98 662.41 892.71 661.69C893.43 660.96 891.4 657.76 888.17 654.54Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp94" d="M811.23 536.69C811.23 547.19 813.13 555.71 815.49 555.71C817.84 555.71 819.75 547.19 819.75 536.69C819.75 526.18 817.84 517.67 815.49 517.67C813.13 517.67 811.23 526.18 811.23 536.69Z" />
                  <path id="&lt;Path&gt;" class="shp95" d="M815.49 532.43C804.98 532.43 796.47 534.34 796.47 536.69C796.47 539.04 804.98 540.95 815.49 540.95C825.99 540.95 834.51 539.04 834.51 536.69C834.51 534.34 825.99 532.43 815.49 532.43Z" />
                  <path id="&lt;Path&gt;" class="shp96" d="M814.18 535.38C810.95 538.61 808.92 541.81 809.64 542.53C810.37 543.25 813.57 541.22 816.8 538C820.02 534.77 822.05 531.57 821.33 530.85C820.61 530.12 817.4 532.15 814.18 535.38Z" />
                  <path id="&lt;Path&gt;" class="shp97" d="M816.8 535.38C813.57 532.15 810.37 530.12 809.64 530.85C808.92 531.57 810.95 534.77 814.18 538C817.4 541.22 820.61 543.25 821.33 542.53C822.05 541.81 820.02 538.61 816.8 535.38Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp98" d="M991.63 612.01C991.63 622.52 993.53 631.04 995.89 631.04C998.24 631.04 1000.15 622.52 1000.15 612.01C1000.15 601.51 998.24 592.99 995.89 592.99C993.53 592.99 991.63 601.51 991.63 612.01Z" />
                  <path id="&lt;Path&gt;" class="shp99" d="M995.89 607.75C985.38 607.75 976.87 609.66 976.87 612.01C976.87 614.37 985.38 616.28 995.89 616.28C1006.39 616.28 1014.91 614.37 1014.91 612.01C1014.91 609.66 1006.39 607.75 995.89 607.75Z" />
                  <path id="&lt;Path&gt;" class="shp100" d="M994.58 610.71C991.35 613.93 989.32 617.13 990.04 617.86C990.77 618.58 993.97 616.55 997.2 613.32C1000.42 610.1 1002.45 606.9 1001.73 606.17C1001.01 605.45 997.8 607.48 994.58 610.71Z" />
                  <path id="&lt;Path&gt;" class="shp101" d="M997.2 610.71C993.97 607.48 990.77 605.45 990.04 606.17C989.32 606.9 991.35 610.1 994.58 613.32C997.8 616.55 1001.01 618.58 1001.73 617.86C1002.45 617.13 1000.42 613.93 997.2 610.71Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp102" d="M1060.84 677.14C1060.84 687.65 1062.75 696.16 1065.1 696.16C1067.45 696.16 1069.36 687.65 1069.36 677.14C1069.36 666.64 1067.45 658.12 1065.1 658.12C1062.75 658.12 1060.84 666.64 1060.84 677.14Z" />
                  <path id="&lt;Path&gt;" class="shp103" d="M1065.1 672.88C1054.59 672.88 1046.08 674.79 1046.08 677.14C1046.08 679.5 1054.59 681.4 1065.1 681.4C1075.6 681.4 1084.12 679.5 1084.12 677.14C1084.12 674.79 1075.6 672.88 1065.1 672.88Z" />
                  <path id="&lt;Path&gt;" class="shp104" d="M1063.79 675.83C1060.56 679.06 1058.53 682.26 1059.26 682.98C1059.98 683.71 1063.18 681.68 1066.41 678.45C1069.63 675.22 1071.66 672.02 1070.94 671.3C1070.22 670.58 1067.02 672.61 1063.79 675.83Z" />
                  <path id="&lt;Path&gt;" class="shp105" d="M1066.41 675.83C1063.18 672.61 1059.98 670.58 1059.26 671.3C1058.53 672.02 1060.56 675.22 1063.79 678.45C1067.02 681.68 1070.22 683.71 1070.94 682.98C1071.66 682.26 1069.63 679.06 1066.41 675.83Z" />
                </g>
              </g>
              <g id="&lt;Group&gt;" style="opacity: 0.8">
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp106" d="M696.9 405.53C696.9 444.17 703.91 475.49 712.57 475.49C721.23 475.49 728.24 444.17 728.24 405.53C728.24 366.89 721.23 335.57 712.57 335.57C703.91 335.57 696.9 366.89 696.9 405.53Z" />
                  <path id="&lt;Path&gt;" class="shp107" d="M712.57 389.85C673.93 389.85 642.61 396.87 642.61 405.53C642.61 414.18 673.93 421.2 712.57 421.2C751.21 421.2 782.53 414.18 782.53 405.53C782.53 396.87 751.21 389.85 712.57 389.85Z" />
                  <path id="&lt;Path&gt;" class="shp108" d="M707.76 400.71C695.89 412.58 688.42 424.36 691.08 427.02C693.74 429.68 705.52 422.21 717.38 410.34C729.25 398.47 736.72 386.7 734.06 384.04C731.4 381.38 719.62 388.85 707.76 400.71Z" />
                  <path id="&lt;Path&gt;" class="shp109" d="M717.38 400.71C705.52 388.85 693.74 381.38 691.08 384.04C688.42 386.7 695.89 398.47 707.76 410.34C719.62 422.21 731.4 429.68 734.06 427.02C736.72 424.36 729.25 412.58 717.38 400.71Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp110" d="M489.17 455.9C489.17 494.54 496.19 525.87 504.85 525.87C513.51 525.87 520.52 494.54 520.52 455.9C520.52 417.26 513.51 385.94 504.85 385.94C496.19 385.94 489.17 417.26 489.17 455.9Z" />
                  <path id="&lt;Path&gt;" class="shp111" d="M504.85 440.23C466.21 440.23 434.89 447.25 434.89 455.9C434.89 464.56 466.21 471.58 504.85 471.58C543.49 471.58 574.81 464.56 574.81 455.9C574.81 447.25 543.49 440.23 504.85 440.23Z" />
                  <path id="&lt;Path&gt;" class="shp112" d="M500.03 451.09C488.17 462.96 480.7 474.73 483.36 477.39C486.02 480.05 497.8 472.58 509.66 460.72C521.53 448.85 529 437.07 526.34 434.41C523.68 431.76 511.9 439.22 500.03 451.09Z" />
                  <path id="&lt;Path&gt;" class="shp113" d="M509.66 451.09C497.8 439.22 486.02 431.76 483.36 434.41C480.7 437.07 488.17 448.85 500.03 460.72C511.9 472.58 523.68 480.05 526.34 477.39C529 474.73 521.53 462.96 509.66 451.09Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp114" d="M538.33 338.98C538.33 377.62 545.35 408.94 554 408.94C562.66 408.94 569.68 377.62 569.68 338.98C569.68 300.34 562.66 269.01 554 269.01C545.35 269.01 538.33 300.34 538.33 338.98Z" />
                  <path id="&lt;Path&gt;" class="shp115" d="M554 323.3C515.36 323.3 484.04 330.32 484.04 338.98C484.04 347.63 515.36 354.65 554 354.65C592.64 354.65 623.97 347.63 623.97 338.98C623.97 330.32 592.64 323.3 554 323.3Z" />
                  <path id="&lt;Path&gt;" class="shp116" d="M549.19 334.16C537.32 346.03 529.86 357.81 532.52 360.46C535.17 363.12 546.95 355.66 558.82 343.79C570.69 331.92 578.15 320.15 575.49 317.49C572.83 314.83 561.06 322.29 549.19 334.16Z" />
                  <path id="&lt;Path&gt;" class="shp117" d="M558.82 334.16C546.95 322.29 535.17 314.83 532.52 317.49C529.86 320.15 537.32 331.92 549.19 343.79C561.06 355.66 572.83 363.12 575.49 360.46C578.15 357.81 570.69 346.03 558.82 334.16Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp118" d="M525.73 304.21C525.73 342.85 532.74 374.17 541.4 374.17C550.06 374.17 557.07 342.85 557.07 304.21C557.07 265.57 550.06 234.25 541.4 234.25C532.74 234.25 525.73 265.57 525.73 304.21Z" />
                  <path id="&lt;Path&gt;" class="shp119" d="M541.4 288.54C502.76 288.54 471.44 295.55 471.44 304.21C471.44 312.87 502.76 319.88 541.4 319.88C580.04 319.88 611.36 312.87 611.36 304.21C611.36 295.55 580.04 288.54 541.4 288.54Z" />
                  <path id="&lt;Path&gt;" class="shp120" d="M536.59 299.4C524.72 311.26 517.25 323.04 519.91 325.7C522.57 328.36 534.35 320.89 546.21 309.02C558.08 297.16 565.55 285.38 562.89 282.72C560.23 280.06 548.45 287.53 536.59 299.4Z" />
                  <path id="&lt;Path&gt;" class="shp121" d="M546.21 299.4C534.35 287.53 522.57 280.06 519.91 282.72C517.25 285.38 524.72 297.16 536.59 309.02C548.45 320.89 560.23 328.36 562.89 325.7C565.55 323.04 558.08 311.26 546.21 299.4Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp122" d="M415.67 288.54C415.67 327.17 422.69 358.5 431.35 358.5C440 358.5 447.02 327.17 447.02 288.54C447.02 249.9 440 218.57 431.35 218.57C422.69 218.57 415.67 249.9 415.67 288.54Z" />
                  <path id="&lt;Path&gt;" class="shp123" d="M431.35 272.86C392.71 272.86 361.38 279.88 361.38 288.54C361.38 297.19 392.71 304.21 431.35 304.21C469.98 304.21 501.31 297.19 501.31 288.54C501.31 279.88 469.98 272.86 431.35 272.86Z" />
                  <path id="&lt;Path&gt;" class="shp124" d="M426.53 283.72C414.66 295.59 407.2 307.37 409.86 310.02C412.52 312.68 424.29 305.22 436.16 293.35C448.03 281.48 455.49 269.71 452.83 267.05C450.18 264.39 438.4 271.85 426.53 283.72Z" />
                  <path id="&lt;Path&gt;" class="shp125" d="M436.16 283.72C424.29 271.85 412.52 264.39 409.86 267.05C407.2 269.71 414.66 281.48 426.53 293.35C438.4 305.22 450.18 312.68 452.83 310.02C455.49 307.37 448.03 295.59 436.16 283.72Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp126" d="M356.84 241.71C356.84 280.35 363.85 311.68 372.51 311.68C381.17 311.68 388.19 280.35 388.19 241.71C388.19 203.07 381.17 171.75 372.51 171.75C363.85 171.75 356.84 203.07 356.84 241.71Z" />
                  <path id="&lt;Path&gt;" class="shp127" d="M372.51 226.04C333.87 226.04 302.55 233.06 302.55 241.71C302.55 250.37 333.87 257.39 372.51 257.39C411.15 257.39 442.47 250.37 442.47 241.71C442.47 233.06 411.15 226.04 372.51 226.04Z" />
                  <path id="&lt;Path&gt;" class="shp128" d="M367.7 236.9C355.83 248.77 348.36 260.54 351.02 263.2C353.68 265.86 365.46 258.4 377.33 246.53C389.19 234.66 396.66 222.88 394 220.22C391.34 217.57 379.57 225.03 367.7 236.9Z" />
                  <path id="&lt;Path&gt;" class="shp129" d="M377.33 236.9C365.46 225.03 353.68 217.57 351.02 220.22C348.36 222.88 355.83 234.66 367.7 246.53C379.57 258.4 391.34 265.86 394 263.2C396.66 260.54 389.19 248.77 377.33 236.9Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp130" d="M400 211.75C400 250.39 407.02 281.71 415.67 281.71C424.33 281.71 431.35 250.39 431.35 211.75C431.35 173.11 424.33 141.78 415.67 141.78C407.02 141.78 400 173.11 400 211.75Z" />
                  <path id="&lt;Path&gt;" class="shp131" d="M415.67 196.07C377.03 196.07 345.71 203.09 345.71 211.75C345.71 220.4 377.03 227.42 415.67 227.42C454.31 227.42 485.63 220.4 485.63 211.75C485.63 203.09 454.31 196.07 415.67 196.07Z" />
                  <path id="&lt;Path&gt;" class="shp132" d="M410.86 206.93C398.99 218.8 391.52 230.58 394.18 233.24C396.84 235.89 408.62 228.43 420.49 216.56C432.35 204.69 439.82 192.92 437.16 190.26C434.5 187.6 422.73 195.07 410.86 206.93Z" />
                  <path id="&lt;Path&gt;" class="shp133" d="M420.49 206.93C408.62 195.07 396.84 187.6 394.18 190.26C391.52 192.92 398.99 204.69 410.86 216.56C422.73 228.43 434.5 235.89 437.16 233.24C439.82 230.58 432.35 218.8 420.49 206.93Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp134" d="M684.91 304.21C684.91 342.85 691.92 374.17 700.58 374.17C709.24 374.17 716.26 342.85 716.26 304.21C716.26 265.57 709.24 234.25 700.58 234.25C691.92 234.25 684.91 265.57 684.91 304.21Z" />
                  <path id="&lt;Path&gt;" class="shp135" d="M700.58 288.54C661.94 288.54 630.62 295.55 630.62 304.21C630.62 312.87 661.94 319.88 700.58 319.88C739.22 319.88 770.54 312.87 770.54 304.21C770.54 295.55 739.22 288.54 700.58 288.54Z" />
                  <path id="&lt;Path&gt;" class="shp136" d="M695.77 299.4C683.9 311.26 676.43 323.04 679.09 325.7C681.75 328.36 693.53 320.89 705.4 309.02C717.26 297.16 724.73 285.38 722.07 282.72C719.41 280.06 707.63 287.53 695.77 299.4Z" />
                  <path id="&lt;Path&gt;" class="shp137" d="M705.4 299.4C693.53 287.53 681.75 280.06 679.09 282.72C676.43 285.38 683.9 297.16 695.77 309.02C707.63 320.89 719.41 328.36 722.07 325.7C724.73 323.04 717.26 311.26 705.4 299.4Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp138" d="M566.51 393.67C566.51 432.31 573.52 463.63 582.18 463.63C590.84 463.63 597.85 432.31 597.85 393.67C597.85 355.03 590.84 323.71 582.18 323.71C573.52 323.71 566.51 355.03 566.51 393.67Z" />
                  <path id="&lt;Path&gt;" class="shp139" d="M582.18 378C543.54 378 512.22 385.01 512.22 393.67C512.22 402.33 543.54 409.34 582.18 409.34C620.82 409.34 652.14 402.33 652.14 393.67C652.14 385.01 620.82 378 582.18 378Z" />
                  <path id="&lt;Path&gt;" class="shp140" d="M577.37 388.86C565.5 400.72 558.03 412.5 560.69 415.16C563.35 417.82 575.13 410.35 586.99 398.48C598.86 386.62 606.33 374.84 603.67 372.18C601.01 369.52 589.23 376.99 577.37 388.86Z" />
                  <path id="&lt;Path&gt;" class="shp141" d="M586.99 388.86C575.13 376.99 563.35 369.52 560.69 372.18C558.03 374.84 565.5 386.62 577.37 398.48C589.23 410.35 601.01 417.82 603.67 415.16C606.33 412.5 598.86 400.72 586.99 388.86Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp142" d="M525.73 408.43C525.73 447.07 532.74 478.39 541.4 478.39C550.06 478.39 557.07 447.07 557.07 408.43C557.07 369.79 550.06 338.47 541.4 338.47C532.74 338.47 525.73 369.79 525.73 408.43Z" />
                  <path id="&lt;Path&gt;" class="shp143" d="M541.4 392.76C502.76 392.76 471.44 399.77 471.44 408.43C471.44 417.09 502.76 424.1 541.4 424.1C580.04 424.1 611.36 417.09 611.36 408.43C611.36 399.77 580.04 392.76 541.4 392.76Z" />
                  <path id="&lt;Path&gt;" class="shp144" d="M536.59 403.62C524.72 415.48 517.25 427.26 519.91 429.92C522.57 432.58 534.35 425.11 546.21 413.24C558.08 401.38 565.55 389.6 562.89 386.94C560.23 384.28 548.45 391.75 536.59 403.62Z" />
                  <path id="&lt;Path&gt;" class="shp145" d="M546.21 403.62C534.35 391.75 522.57 384.28 519.91 386.94C517.25 389.6 524.72 401.38 536.59 413.24C548.45 425.11 560.23 432.58 562.89 429.92C565.55 427.26 558.08 415.48 546.21 403.62Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp146" d="M779.98 453.22C779.98 509.24 790.15 554.65 802.7 554.65C815.25 554.65 825.42 509.24 825.42 453.22C825.42 397.21 815.25 351.79 802.7 351.79C790.15 351.79 779.98 397.21 779.98 453.22Z" />
                  <path id="&lt;Path&gt;" class="shp147" d="M802.7 430.5C746.68 430.5 701.27 440.67 701.27 453.22C701.27 465.77 746.68 475.95 802.7 475.95C858.72 475.95 904.13 465.77 904.13 453.22C904.13 440.67 858.72 430.5 802.7 430.5Z" />
                  <path id="&lt;Path&gt;" class="shp148" d="M795.72 446.24C778.52 463.45 767.69 480.52 771.55 484.38C775.4 488.23 792.47 477.41 809.68 460.2C826.89 443 837.71 425.93 833.85 422.07C830 418.22 812.93 429.04 795.72 446.24Z" />
                  <path id="&lt;Path&gt;" class="shp149" d="M809.68 446.24C792.47 429.04 775.4 418.22 771.55 422.07C767.69 425.93 778.52 443 795.72 460.2C812.93 477.41 830 488.23 833.85 484.38C837.71 480.52 826.89 463.45 809.68 446.24Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp150" d="M578.27 338.61C578.27 380.9 585.95 415.17 595.43 415.17C604.9 415.17 612.58 380.9 612.58 338.61C612.58 296.33 604.9 262.05 595.43 262.05C585.95 262.05 578.27 296.33 578.27 338.61Z" />
                  <path id="&lt;Path&gt;" class="shp151" d="M595.43 321.46C553.14 321.46 518.86 329.14 518.86 338.61C518.86 348.09 553.14 355.76 595.43 355.76C637.71 355.76 671.99 348.09 671.99 338.61C671.99 329.14 637.71 321.46 595.43 321.46Z" />
                  <path id="&lt;Path&gt;" class="shp152" d="M590.16 333.34C577.17 346.33 569 359.22 571.91 362.13C574.82 365.04 587.71 356.87 600.69 343.88C613.68 330.89 621.85 318.01 618.94 315.1C616.03 312.19 603.14 320.36 590.16 333.34Z" />
                  <path id="&lt;Path&gt;" class="shp153" d="M600.69 333.34C587.71 320.36 574.82 312.19 571.91 315.1C569 318.01 577.17 330.89 590.16 343.88C603.14 356.87 616.03 365.04 618.94 362.13C621.85 359.22 613.68 346.33 600.69 333.34Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp154" d="M448.82 217.67C448.82 232.27 451.47 244.11 454.74 244.11C458.02 244.11 460.67 232.27 460.67 217.67C460.67 203.07 458.02 191.23 454.74 191.23C451.47 191.23 448.82 203.07 448.82 217.67Z" />
                  <path id="&lt;Path&gt;" class="shp155" d="M454.74 211.75C440.14 211.75 428.3 214.4 428.3 217.67C428.3 220.94 440.14 223.6 454.74 223.6C469.35 223.6 481.19 220.94 481.19 217.67C481.19 214.4 469.35 211.75 454.74 211.75Z" />
                  <path id="&lt;Path&gt;" class="shp156" d="M452.92 215.85C448.44 220.34 445.62 224.79 446.62 225.79C447.63 226.8 452.08 223.98 456.56 219.49C461.05 215.01 463.87 210.55 462.87 209.55C461.86 208.54 457.41 211.37 452.92 215.85Z" />
                  <path id="&lt;Path&gt;" class="shp157" d="M456.56 215.85C452.08 211.37 447.63 208.54 446.62 209.55C445.62 210.55 448.44 215.01 452.92 219.49C457.41 223.98 461.86 226.8 462.87 225.79C463.87 224.79 461.05 220.34 456.56 215.85Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp158" d="M341.15 186.98C341.15 201.58 343.8 213.42 347.07 213.42C350.34 213.42 353 201.58 353 186.98C353 172.38 350.34 160.54 347.07 160.54C343.8 160.54 341.15 172.38 341.15 186.98Z" />
                  <path id="&lt;Path&gt;" class="shp159" d="M347.07 181.06C332.47 181.06 320.63 183.71 320.63 186.98C320.63 190.25 332.47 192.9 347.07 192.9C361.68 192.9 373.51 190.25 373.51 186.98C373.51 183.71 361.68 181.06 347.07 181.06Z" />
                  <path id="&lt;Path&gt;" class="shp160" d="M345.25 185.16C340.77 189.65 337.95 194.1 338.95 195.1C339.95 196.11 344.41 193.29 348.89 188.8C353.38 184.31 356.2 179.86 355.19 178.86C354.19 177.85 349.74 180.68 345.25 185.16Z" />
                  <path id="&lt;Path&gt;" class="shp161" d="M348.89 185.16C344.41 180.68 339.95 177.85 338.95 178.86C337.95 179.86 340.77 184.31 345.25 188.8C349.74 193.29 354.19 196.11 355.19 195.1C356.2 194.1 353.38 189.65 348.89 185.16Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp162" d="M451.72 427.55C451.72 442.16 454.38 454 457.65 454C460.92 454 463.57 442.16 463.57 427.55C463.57 412.95 460.92 401.11 457.65 401.11C454.38 401.11 451.72 412.95 451.72 427.55Z" />
                  <path id="&lt;Path&gt;" class="shp163" d="M457.65 421.63C443.04 421.63 431.21 424.28 431.21 427.55C431.21 430.83 443.04 433.48 457.65 433.48C472.25 433.48 484.09 430.83 484.09 427.55C484.09 424.28 472.25 421.63 457.65 421.63Z" />
                  <path id="&lt;Path&gt;" class="shp164" d="M455.83 425.73C451.34 430.22 448.52 434.67 449.53 435.68C450.53 436.68 454.98 433.86 459.47 429.37C463.95 424.89 466.77 420.44 465.77 419.43C464.76 418.43 460.31 421.25 455.83 425.73Z" />
                  <path id="&lt;Path&gt;" class="shp165" d="M459.47 425.73C454.98 421.25 450.53 418.43 449.53 419.43C448.52 420.44 451.34 424.89 455.83 429.37C460.31 433.86 464.76 436.68 465.77 435.68C466.77 434.67 463.95 430.22 459.47 425.73Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp166" d="M543.8 464.23C543.8 478.83 546.45 490.67 549.72 490.67C553 490.67 555.65 478.83 555.65 464.23C555.65 449.62 553 437.79 549.72 437.79C546.45 437.79 543.8 449.62 543.8 464.23Z" />
                  <path id="&lt;Path&gt;" class="shp167" d="M549.72 458.3C535.12 458.3 523.28 460.96 523.28 464.23C523.28 467.5 535.12 470.15 549.72 470.15C564.33 470.15 576.17 467.5 576.17 464.23C576.17 460.96 564.33 458.3 549.72 458.3Z" />
                  <path id="&lt;Path&gt;" class="shp168" d="M547.9 462.41C543.42 466.89 540.6 471.34 541.6 472.35C542.61 473.35 547.06 470.53 551.54 466.05C556.03 461.56 558.85 457.11 557.85 456.11C556.84 455.1 552.39 457.92 547.9 462.41Z" />
                  <path id="&lt;Path&gt;" class="shp169" d="M551.54 462.41C547.06 457.92 542.61 455.1 541.6 456.11C540.6 457.11 543.42 461.56 547.9 466.05C552.39 470.53 556.84 473.35 557.85 472.35C558.85 471.34 556.03 466.89 551.54 462.41Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp170" d="M451.86 312.53C451.86 327.14 454.52 338.98 457.79 338.98C461.06 338.98 463.71 327.14 463.71 312.53C463.71 297.93 461.06 286.09 457.79 286.09C454.52 286.09 451.86 297.93 451.86 312.53Z" />
                  <path id="&lt;Path&gt;" class="shp171" d="M457.79 306.61C443.18 306.61 431.35 309.26 431.35 312.53C431.35 315.81 443.18 318.46 457.79 318.46C472.39 318.46 484.23 315.81 484.23 312.53C484.23 309.26 472.39 306.61 457.79 306.61Z" />
                  <path id="&lt;Path&gt;" class="shp172" d="M455.97 310.71C451.48 315.2 448.66 319.65 449.67 320.66C450.67 321.66 455.12 318.84 459.61 314.35C464.09 309.87 466.91 305.42 465.91 304.41C464.9 303.41 460.45 306.23 455.97 310.71Z" />
                  <path id="&lt;Path&gt;" class="shp173" d="M459.61 310.71C455.12 306.23 450.67 303.41 449.67 304.41C448.66 305.42 451.48 309.87 455.97 314.35C460.45 318.84 464.9 321.66 465.91 320.66C466.91 319.65 464.09 315.2 459.61 310.71Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp174" d="M445.8 278.93C445.8 293.54 448.45 305.37 451.72 305.37C455 305.37 457.65 293.54 457.65 278.93C457.65 264.33 455 252.49 451.72 252.49C448.45 252.49 445.8 264.33 445.8 278.93Z" />
                  <path id="&lt;Path&gt;" class="shp175" d="M451.72 273.01C437.12 273.01 425.28 275.66 425.28 278.93C425.28 282.2 437.12 284.86 451.72 284.86C466.33 284.86 478.17 282.2 478.17 278.93C478.17 275.66 466.33 273.01 451.72 273.01Z" />
                  <path id="&lt;Path&gt;" class="shp176" d="M449.9 277.11C445.42 281.6 442.6 286.05 443.6 287.05C444.61 288.06 449.06 285.24 453.54 280.75C458.03 276.27 460.85 271.82 459.85 270.81C458.84 269.81 454.39 272.63 449.9 277.11Z" />
                  <path id="&lt;Path&gt;" class="shp177" d="M453.54 277.11C449.06 272.63 444.61 269.81 443.6 270.81C442.6 271.82 445.42 276.27 449.9 280.75C454.39 285.24 458.84 288.06 459.85 287.05C460.85 286.05 458.03 281.6 453.54 277.11Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp178" d="M700.58 464.23C700.58 478.83 703.23 490.67 706.51 490.67C709.78 490.67 712.43 478.83 712.43 464.23C712.43 449.62 709.78 437.79 706.51 437.79C703.23 437.79 700.58 449.62 700.58 464.23Z" />
                  <path id="&lt;Path&gt;" class="shp179" d="M706.51 458.3C691.9 458.3 680.06 460.96 680.06 464.23C680.06 467.5 691.9 470.15 706.51 470.15C721.11 470.15 732.95 467.5 732.95 464.23C732.95 460.96 721.11 458.3 706.51 458.3Z" />
                  <path id="&lt;Path&gt;" class="shp180" d="M704.69 462.41C700.2 466.89 697.38 471.34 698.38 472.35C699.39 473.35 703.84 470.53 708.32 466.05C712.81 461.56 715.63 457.11 714.63 456.11C713.62 455.1 709.17 457.92 704.69 462.41Z" />
                  <path id="&lt;Path&gt;" class="shp181" d="M708.32 462.41C703.84 457.92 699.39 455.1 698.38 456.11C697.38 457.11 700.2 461.56 704.69 466.05C709.17 470.53 713.62 473.35 714.63 472.35C715.63 471.34 712.81 466.89 708.32 462.41Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp182" d="M685.09 375.96C685.09 386.47 687 394.99 689.35 394.99C691.7 394.99 693.61 386.47 693.61 375.96C693.61 365.46 691.7 356.94 689.35 356.94C687 356.94 685.09 365.46 685.09 375.96Z" />
                  <path id="&lt;Path&gt;" class="shp183" d="M689.35 371.7C678.84 371.7 670.33 373.61 670.33 375.96C670.33 378.32 678.84 380.23 689.35 380.23C699.86 380.23 708.37 378.32 708.37 375.96C708.37 373.61 699.86 371.7 689.35 371.7Z" />
                  <path id="&lt;Path&gt;" class="shp184" d="M688.04 374.66C684.81 377.88 682.78 381.08 683.51 381.81C684.23 382.53 687.43 380.5 690.66 377.27C693.89 374.05 695.92 370.84 695.19 370.12C694.47 369.4 691.27 371.43 688.04 374.66Z" />
                  <path id="&lt;Path&gt;" class="shp185" d="M690.66 374.66C687.43 371.43 684.23 369.4 683.51 370.12C682.78 370.84 684.81 374.05 688.04 377.27C691.27 380.5 694.47 382.53 695.19 381.81C695.92 381.08 693.89 377.88 690.66 374.66Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp186" d="M748.99 373.16C748.99 383.67 750.9 392.18 753.25 392.18C755.6 392.18 757.51 383.67 757.51 373.16C757.51 362.66 755.6 354.14 753.25 354.14C750.9 354.14 748.99 362.66 748.99 373.16Z" />
                  <path id="&lt;Path&gt;" class="shp187" d="M753.25 368.9C742.74 368.9 734.23 370.81 734.23 373.16C734.23 375.52 742.74 377.42 753.25 377.42C763.76 377.42 772.27 375.52 772.27 373.16C772.27 370.81 763.76 368.9 753.25 368.9Z" />
                  <path id="&lt;Path&gt;" class="shp188" d="M751.94 371.85C748.71 375.08 746.69 378.28 747.41 379.01C748.13 379.73 751.33 377.7 754.56 374.47C757.79 371.25 759.82 368.04 759.09 367.32C758.37 366.6 755.17 368.63 751.94 371.85Z" />
                  <path id="&lt;Path&gt;" class="shp189" d="M754.56 371.85C751.33 368.63 748.13 366.6 747.41 367.32C746.69 368.04 748.71 371.25 751.94 374.47C755.17 377.7 758.37 379.73 759.09 379.01C759.82 378.28 757.79 375.08 754.56 371.85Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp190" d="M564.48 241.71C564.48 252.22 566.39 260.73 568.75 260.73C571.1 260.73 573.01 252.22 573.01 241.71C573.01 231.21 571.1 222.69 568.75 222.69C566.39 222.69 564.48 231.21 564.48 241.71Z" />
                  <path id="&lt;Path&gt;" class="shp191" d="M568.75 237.45C558.24 237.45 549.72 239.36 549.72 241.71C549.72 244.07 558.24 245.97 568.75 245.97C579.25 245.97 587.77 244.07 587.77 241.71C587.77 239.36 579.25 237.45 568.75 237.45Z" />
                  <path id="&lt;Path&gt;" class="shp192" d="M567.44 240.4C564.21 243.63 562.18 246.83 562.9 247.56C563.63 248.28 566.83 246.25 570.05 243.02C573.28 239.8 575.31 236.59 574.59 235.87C573.87 235.15 570.66 237.18 567.44 240.4Z" />
                  <path id="&lt;Path&gt;" class="shp193" d="M570.05 240.4C566.83 237.18 563.63 235.15 562.9 235.87C562.18 236.59 564.21 239.8 567.44 243.02C570.66 246.25 573.87 248.28 574.59 247.56C575.31 246.83 573.28 243.63 570.05 240.4Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp194" d="M458.65 368.11C458.65 378.62 460.56 387.13 462.91 387.13C465.26 387.13 467.17 378.62 467.17 368.11C467.17 357.61 465.26 349.09 462.91 349.09C460.56 349.09 458.65 357.61 458.65 368.11Z" />
                  <path id="&lt;Path&gt;" class="shp195" d="M462.91 363.85C452.41 363.85 443.89 365.76 443.89 368.11C443.89 370.46 452.41 372.37 462.91 372.37C473.42 372.37 481.93 370.46 481.93 368.11C481.93 365.76 473.42 363.85 462.91 363.85Z" />
                  <path id="&lt;Path&gt;" class="shp196" d="M461.6 366.8C458.38 370.03 456.35 373.23 457.07 373.95C457.79 374.68 460.99 372.65 464.22 369.42C467.45 366.19 469.48 362.99 468.75 362.27C468.03 361.55 464.83 363.58 461.6 366.8Z" />
                  <path id="&lt;Path&gt;" class="shp197" d="M464.22 366.8C460.99 363.58 457.79 361.55 457.07 362.27C456.35 362.99 458.38 366.19 461.6 369.42C464.83 372.65 468.03 374.68 468.75 373.95C469.48 373.23 467.45 370.03 464.22 366.8Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp198" d="M387.27 248.96C387.27 259.46 389.18 267.98 391.53 267.98C393.89 267.98 395.79 259.46 395.79 248.96C395.79 238.45 393.89 229.93 391.53 229.93C389.18 229.93 387.27 238.45 387.27 248.96Z" />
                  <path id="&lt;Path&gt;" class="shp199" d="M391.53 244.69C381.03 244.69 372.51 246.6 372.51 248.96C372.51 251.31 381.03 253.22 391.53 253.22C402.04 253.22 410.55 251.31 410.55 248.96C410.55 246.6 402.04 244.69 391.53 244.69Z" />
                  <path id="&lt;Path&gt;" class="shp200" d="M390.22 247.65C387 250.87 384.97 254.07 385.69 254.8C386.41 255.52 389.62 253.49 392.84 250.26C396.07 247.04 398.1 243.84 397.38 243.11C396.65 242.39 393.45 244.42 390.22 247.65Z" />
                  <path id="&lt;Path&gt;" class="shp201" d="M392.84 247.65C389.62 244.42 386.41 242.39 385.69 243.11C384.97 243.84 387 247.04 390.22 250.26C393.45 253.49 396.65 255.52 397.38 254.8C398.1 254.07 396.07 250.87 392.84 247.65Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp202" d="M567.67 324.28C567.67 334.79 569.58 343.3 571.93 343.3C574.29 343.3 576.19 334.79 576.19 324.28C576.19 313.78 574.29 305.26 571.93 305.26C569.58 305.26 567.67 313.78 567.67 324.28Z" />
                  <path id="&lt;Path&gt;" class="shp203" d="M571.93 320.02C561.43 320.02 552.91 321.93 552.91 324.28C552.91 326.63 561.43 328.54 571.93 328.54C582.44 328.54 590.95 326.63 590.95 324.28C590.95 321.93 582.44 320.02 571.93 320.02Z" />
                  <path id="&lt;Path&gt;" class="shp204" d="M570.62 322.97C567.4 326.2 565.37 329.4 566.09 330.12C566.81 330.85 570.02 328.82 573.24 325.59C576.47 322.36 578.5 319.16 577.77 318.44C577.05 317.72 573.85 319.75 570.62 322.97Z" />
                  <path id="&lt;Path&gt;" class="shp205" d="M573.24 322.97C570.02 319.75 566.81 317.72 566.09 318.44C565.37 319.16 567.4 322.36 570.62 325.59C573.85 328.82 577.05 330.85 577.77 330.12C578.5 329.4 576.47 326.2 573.24 322.97Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp206" d="M636.88 389.41C636.88 399.91 638.79 408.43 641.15 408.43C643.5 408.43 645.41 399.91 645.41 389.41C645.41 378.9 643.5 370.39 641.15 370.39C638.79 370.39 636.88 378.9 636.88 389.41Z" />
                  <path id="&lt;Path&gt;" class="shp207" d="M641.15 385.15C630.64 385.15 622.12 387.05 622.12 389.41C622.12 391.76 630.64 393.67 641.15 393.67C651.65 393.67 660.17 391.76 660.17 389.41C660.17 387.05 651.65 385.15 641.15 385.15Z" />
                  <path id="&lt;Path&gt;" class="shp208" d="M639.84 388.1C636.61 391.33 634.58 394.53 635.3 395.25C636.03 395.97 639.23 393.94 642.45 390.72C645.68 387.49 647.71 384.29 646.99 383.57C646.26 382.84 643.06 384.87 639.84 388.1Z" />
                  <path id="&lt;Path&gt;" class="shp209" d="M642.45 388.1C639.23 384.87 636.03 382.84 635.3 383.57C634.58 384.29 636.61 387.49 639.84 390.72C643.06 393.94 646.26 395.97 646.99 395.25C647.71 394.53 645.68 391.33 642.45 388.1Z" />
                </g>
              </g>
            </g>
            <g id="&lt;Group&gt;" style="opacity: 0.2;mix-blend-mode: overlay">
              <g id="&lt;Group&gt;" style="mix-blend-mode: overlay">
                <path id="&lt;Path&gt;" class="shp210" d="M866.46 644.37C861.78 665.43 875.05 686.29 896.1 690.98C917.16 695.66 938.02 682.4 942.71 661.34C947.39 640.29 934.12 619.42 913.07 614.74C892.02 610.05 871.15 623.32 866.46 644.37Z" />
                <path id="&lt;Path&gt;" class="shp211" d="M995.07 569.9C988.22 600.67 1007.62 631.17 1038.39 638.02C1069.16 644.86 1099.66 625.47 1106.5 594.7C1113.35 563.93 1093.96 533.43 1063.19 526.58C1032.41 519.73 1001.92 539.13 995.07 569.9Z" />
                <path id="&lt;Path&gt;" class="shp212" d="M1154.51 765.38C1143.44 815.13 1174.79 864.43 1224.54 875.5C1274.28 886.57 1323.58 855.22 1334.65 805.47C1345.72 755.73 1314.37 706.43 1264.63 695.36C1214.88 684.29 1165.58 715.64 1154.51 765.38Z" />
              </g>
            </g>
            <g id="&lt;Group&gt;">
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M708.21 667.3C705.97 666.69 707.17 663.41 709.41 664.02C711.65 664.63 710.45 667.91 708.21 667.3Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M645.93 548.27C643.7 547.66 644.9 544.38 647.13 544.99C649.37 545.6 648.17 548.88 645.93 548.27Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M751.43 577.08C749.19 576.47 750.4 573.19 752.63 573.8C754.87 574.41 753.67 577.69 751.43 577.08Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M848.89 555.56C846.66 554.95 847.86 551.67 850.1 552.28C852.33 552.89 851.13 556.17 848.89 555.56Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M842.46 500.87C840.22 500.26 841.42 496.98 843.66 497.59C845.9 498.2 844.7 501.48 842.46 500.87Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M763.33 516.8C761.09 516.19 762.29 512.91 764.53 513.52C766.77 514.13 765.57 517.41 763.33 516.8Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M895.64 480.74C893.4 480.13 894.6 476.85 896.84 477.46C899.08 478.07 897.88 481.35 895.64 480.74Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M817.7 401.71C815.46 401.1 816.66 397.82 818.9 398.43C821.14 399.04 819.93 402.32 817.7 401.71Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M760.13 475.5C757.89 474.89 759.09 471.61 761.33 472.22C763.57 472.83 762.37 476.11 760.13 475.5Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M816.72 554.48C814.48 553.87 815.68 550.59 817.92 551.2C820.16 551.81 818.95 555.09 816.72 554.48Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M866.59 501.68C864.35 501.07 865.55 497.79 867.79 498.4C870.03 499.01 868.83 502.29 866.59 501.68Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M748.81 489.74C746.57 489.13 747.77 485.84 750.01 486.46C752.25 487.07 751.05 490.35 748.81 489.74Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M893.93 468.72C891.69 468.11 892.9 464.83 895.13 465.44C897.37 466.05 896.17 469.33 893.93 468.72Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M736.01 399.62C733.77 399.01 734.97 395.72 737.21 396.34C739.45 396.95 738.24 400.23 736.01 399.62Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M732.14 560.26C729.9 559.65 731.11 556.37 733.34 556.98C735.58 557.59 734.38 560.87 732.14 560.26Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M874.28 480.68C872.04 480.07 873.25 476.79 875.48 477.4C877.72 478.01 876.52 481.29 874.28 480.68Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M750.53 426.68C748.29 426.07 749.49 422.79 751.73 423.4C753.97 424.01 752.76 427.29 750.53 426.68Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M837.54 522.63C835.3 522.02 836.51 518.73 838.74 519.35C840.98 519.96 839.78 523.24 837.54 522.63Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M919.77 481.55C917.53 480.94 918.74 477.66 920.97 478.27C923.21 478.88 922.01 482.16 919.77 481.55Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M826.67 352.18C824.43 351.57 825.64 348.29 827.87 348.9C830.11 349.51 828.91 352.79 826.67 352.18Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M744.96 500.24C742.73 499.63 743.93 496.34 746.17 496.96C748.4 497.57 747.2 500.85 744.96 500.24Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M878.13 470.18C875.89 469.57 877.09 466.29 879.33 466.9C881.57 467.51 880.37 470.79 878.13 470.18Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M931.94 548.4C929.7 547.79 930.9 544.51 933.14 545.12C935.38 545.73 934.17 549.01 931.94 548.4Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M897.15 359.88C894.91 359.26 896.11 355.98 898.35 356.59C900.59 357.21 899.39 360.49 897.15 359.88Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M840.64 497.49C838.4 496.87 839.61 493.59 841.84 494.2C844.08 494.82 842.88 498.1 840.64 497.49Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M935.37 422.29C933.13 421.68 934.33 418.39 936.57 419.01C938.81 419.62 937.61 422.9 935.37 422.29Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M848.34 401.41C846.11 400.8 847.31 397.52 849.55 398.13C851.78 398.74 850.58 402.02 848.34 401.41Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M977.55 390.49C975.32 389.88 976.52 386.6 978.76 387.21C980.99 387.82 979.79 391.1 977.55 390.49Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M899.6 386.53C897.36 385.92 898.57 382.64 900.8 383.25C903.04 383.86 901.84 387.14 899.6 386.53Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M982.47 368.73C980.23 368.12 981.43 364.84 983.67 365.45C985.91 366.06 984.71 369.34 982.47 368.73Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M955.01 485.4C952.77 484.79 953.97 481.51 956.21 482.12C958.45 482.73 957.25 486.01 955.01 485.4Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M834.88 438.16C832.65 437.55 833.85 434.27 836.09 434.88C838.32 435.49 837.12 438.77 834.88 438.16Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M887.52 536.27C885.28 535.66 886.48 532.38 888.72 532.99C890.96 533.6 889.75 536.88 887.52 536.27Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M887.52 536.27C885.28 535.66 886.48 532.38 888.72 532.99C890.96 533.6 889.75 536.88 887.52 536.27Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M815.34 441.49C813.1 440.88 814.31 437.6 816.54 438.21C818.78 438.82 817.58 442.1 815.34 441.49Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M881 537.38C878.76 536.77 879.97 533.49 882.2 534.1C884.44 534.71 883.24 537.99 881 537.38Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M831.15 440.03C828.91 439.42 830.11 436.14 832.35 436.75C834.59 437.36 833.38 440.64 831.15 440.03Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M758.75 437.59C756.51 436.98 757.71 433.7 759.95 434.31C762.19 434.92 760.98 438.2 758.75 437.59Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M800.08 399.78C797.84 399.17 799.04 395.89 801.28 396.5C803.52 397.11 802.31 400.4 800.08 399.78Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M892.44 439.44C890.2 438.83 891.4 435.55 893.64 436.16C895.88 436.77 894.68 440.05 892.44 439.44Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M876.65 365.83C874.41 365.22 875.61 361.94 877.85 362.55C880.09 363.16 878.88 366.44 876.65 365.83Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M911.76 528.45C909.52 527.84 910.72 524.56 912.96 525.17C915.2 525.78 913.99 529.06 911.76 528.45Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M794.93 588.95C792.69 588.34 793.89 585.06 796.13 585.67C798.37 586.28 797.17 589.57 794.93 588.95Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M931.71 640.74C929.47 640.13 930.68 636.85 932.91 637.46C935.15 638.07 933.95 641.35 931.71 640.74Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M961.95 524.83C959.71 524.22 960.91 520.94 963.15 521.55C965.39 522.16 964.18 525.44 961.95 524.83Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M817.03 603.65C814.79 603.04 815.99 599.76 818.23 600.37C820.47 600.98 819.27 604.26 817.03 603.65Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M686.01 536.12C683.78 535.51 684.98 532.22 687.22 532.84C689.45 533.45 688.25 536.73 686.01 536.12Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M751.28 366.25C749.04 365.64 750.24 362.36 752.48 362.97C754.72 363.58 753.52 366.86 751.28 366.25Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M890.83 493.86C888.59 493.25 889.8 489.97 892.03 490.58C894.27 491.19 893.07 494.48 890.83 493.86Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M1037.12 528.03C1034.88 527.42 1036.09 524.14 1038.32 524.75C1040.56 525.36 1039.36 528.64 1037.12 528.03Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M892.87 404.91C890.63 404.3 891.84 401.02 894.07 401.63C896.31 402.24 895.11 405.52 892.87 404.91Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M985.02 461.83C982.78 461.22 983.98 457.94 986.22 458.55C988.46 459.16 987.26 462.44 985.02 461.83Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M811.93 417.46C809.69 416.85 810.89 413.57 813.13 414.18C815.37 414.79 814.17 418.07 811.93 417.46Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M886.69 305.05C884.45 304.43 885.65 301.15 887.89 301.76C890.13 302.38 888.93 305.66 886.69 305.05Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M742.83 447.68C740.6 447.07 741.8 443.79 744.04 444.4C746.27 445.01 745.07 448.29 742.83 447.68Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M823.11 637.07C820.87 636.46 822.08 633.18 824.31 633.79C826.55 634.4 825.35 637.69 823.11 637.07Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M906.2 526.94C903.97 526.33 905.17 523.04 907.41 523.65C909.64 524.27 908.44 527.55 906.2 526.94Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M775.72 491.31C773.48 490.7 774.68 487.42 776.92 488.03C779.16 488.64 777.96 491.92 775.72 491.31Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M787.79 416.64C785.56 416.03 786.76 412.75 789 413.36C791.23 413.97 790.03 417.25 787.79 416.64Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M820.78 526.71C818.54 526.1 819.74 522.82 821.98 523.43C824.22 524.04 823.01 527.32 820.78 526.71Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M930.78 418.15C928.54 417.53 929.74 414.25 931.98 414.86C934.22 415.48 933.02 418.76 930.78 418.15Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M888.15 559.55C885.92 558.93 887.12 555.65 889.36 556.26C891.59 556.88 890.39 560.16 888.15 559.55Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M984.06 464.46C981.82 463.84 983.02 460.56 985.26 461.17C987.5 461.78 986.3 465.07 984.06 464.46Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M818.77 390.45C816.53 389.84 817.73 386.56 819.97 387.17C822.21 387.78 821 391.06 818.77 390.45Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M846.33 265.15C844.09 264.54 845.3 261.26 847.53 261.87C849.77 262.48 848.57 265.76 846.33 265.15Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M689.14 285.76C686.9 285.15 688.11 281.87 690.34 282.48C692.58 283.09 691.38 286.37 689.14 285.76Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M626.98 430.49C624.74 429.87 625.94 426.59 628.18 427.2C630.42 427.81 629.21 431.1 626.98 430.49Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M852.37 673.94C850.13 673.33 851.33 670.04 853.57 670.66C855.81 671.27 854.6 674.55 852.37 673.94Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M752.67 487.54C750.88 487.05 751.84 484.43 753.63 484.92C755.42 485.41 754.46 488.03 752.67 487.54Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M846.85 455.51C845.06 455.02 846.03 452.39 847.82 452.88C849.61 453.37 848.65 456 846.85 455.51Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M827.55 291.42C825.76 290.94 826.72 288.31 828.51 288.8C830.3 289.29 829.34 291.91 827.55 291.42Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M843.98 388.31C842.19 387.82 843.15 385.2 844.94 385.69C846.73 386.17 845.77 388.8 843.98 388.31Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M843.98 388.31C842.19 387.82 843.15 385.2 844.94 385.69C846.73 386.17 845.77 388.8 843.98 388.31Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M666.62 313.9C664.83 313.41 665.79 310.78 667.58 311.27C669.37 311.76 668.41 314.39 666.62 313.9Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M840.89 338.38C839.1 337.89 840.06 335.27 841.85 335.75C843.64 336.24 842.68 338.87 840.89 338.38Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M897.56 558.87C895.77 558.38 896.74 555.75 898.53 556.24C900.32 556.73 899.35 559.35 897.56 558.87Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M1015.35 495.74C1013.56 495.25 1014.53 492.63 1016.32 493.11C1018.11 493.6 1017.15 496.23 1015.35 495.74Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M955.53 675.76C953.74 675.27 954.7 672.64 956.49 673.13C958.28 673.62 957.32 676.24 955.53 675.76Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M667.24 487.32C665.45 486.83 666.41 484.2 668.2 484.69C669.99 485.18 669.03 487.81 667.24 487.32Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M747.01 494.66C745.22 494.17 746.18 491.55 747.97 492.03C749.76 492.52 748.8 495.15 747.01 494.66Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M768.39 427.95C767.04 427.58 767.76 425.61 769.11 425.98C770.45 426.35 769.73 428.31 768.39 427.95Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M930.79 509.83C929.45 509.46 930.17 507.49 931.51 507.86C932.86 508.23 932.14 510.19 930.79 509.83Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M933.45 346.93C932.11 346.56 932.83 344.59 934.17 344.96C935.51 345.33 934.79 347.29 933.45 346.93Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M931.02 442.51C929.67 442.15 930.39 440.18 931.74 440.54C933.08 440.91 932.36 442.88 931.02 442.51Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M982.14 364.07C980.8 363.71 981.52 361.74 982.86 362.1C984.2 362.47 983.48 364.44 982.14 364.07Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M1013.16 507.29C1011.82 506.93 1012.54 504.96 1013.88 505.32C1015.22 505.69 1014.5 507.66 1013.16 507.29Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M896.57 375.36C895.23 374.99 895.95 373.02 897.29 373.39C898.63 373.76 897.91 375.73 896.57 375.36Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M926.48 310.37C925.13 310.01 925.85 308.04 927.2 308.41C928.54 308.77 927.82 310.74 926.48 310.37Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M717.32 353.37C715.97 353 716.69 351.03 718.04 351.4C719.38 351.76 718.66 353.73 717.32 353.37Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M702.78 426.4C701.44 426.03 702.16 424.06 703.51 424.43C704.85 424.8 704.13 426.77 702.78 426.4Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M689.55 395.83C688.2 395.47 688.93 393.5 690.27 393.87C691.61 394.23 690.89 396.2 689.55 395.83Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M722.85 505.03C721.51 504.66 722.23 502.69 723.57 503.06C724.91 503.43 724.19 505.39 722.85 505.03Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M856.97 472.35C855.63 471.98 856.35 470.01 857.7 470.38C859.04 470.75 858.32 472.71 856.97 472.35Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M892.29 420.39C890.95 420.02 891.67 418.06 893.01 418.42C894.36 418.79 893.63 420.76 892.29 420.39Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M932.36 483.31C931.02 482.94 931.74 480.97 933.08 481.34C934.43 481.7 933.71 483.67 932.36 483.31Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M967.46 448.62C966.12 448.25 966.84 446.28 968.18 446.65C969.53 447.01 968.81 448.98 967.46 448.62Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M980.69 529.23C979.35 528.86 980.07 526.89 981.42 527.26C982.76 527.63 982.04 529.59 980.69 529.23Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M981.35 427.38C980.01 427.01 980.73 425.05 982.07 425.41C983.41 425.78 982.69 427.75 981.35 427.38Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M735.45 487.29C734.11 486.93 734.83 484.96 736.17 485.32C737.52 485.69 736.8 487.66 735.45 487.29Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M809.27 524.77C807.93 524.41 808.65 522.44 809.99 522.8C811.34 523.17 810.61 525.14 809.27 524.77Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M877.27 433.61C875.93 433.25 876.65 431.28 877.99 431.65C879.33 432.01 878.61 433.98 877.27 433.61Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M931.09 386.71C929.75 386.34 930.47 384.37 931.81 384.74C933.16 385.11 932.44 387.08 931.09 386.71Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M771.48 427.83C770.14 427.46 770.86 425.5 772.2 425.86C773.55 426.23 772.82 428.2 771.48 427.83Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M804.95 325.32C803.61 324.95 804.33 322.98 805.68 323.35C807.02 323.72 806.3 325.69 804.95 325.32Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M684.22 327C682.87 326.64 683.6 324.67 684.94 325.04C686.28 325.4 685.56 327.37 684.22 327Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M729.32 531.82C727.98 531.45 728.7 529.49 730.05 529.85C731.39 530.22 730.67 532.19 729.32 531.82Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M800.87 553.28C799.52 552.91 800.25 550.94 801.59 551.31C802.93 551.68 802.21 553.65 800.87 553.28Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M881.68 427.12C880.34 426.75 881.06 424.78 882.4 425.15C883.75 425.52 883.03 427.49 881.68 427.12Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M934.28 528.1C932.94 527.74 933.66 525.77 935 526.14C936.34 526.5 935.62 528.47 934.28 528.1Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M1009.39 461.99C1008.05 461.62 1008.77 459.65 1010.11 460.02C1011.46 460.39 1010.74 462.35 1009.39 461.99Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M941.53 641.73C940.18 641.37 940.9 639.4 942.25 639.76C943.59 640.13 942.87 642.1 941.53 641.73Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M981.98 475.68C980.64 475.31 981.36 473.34 982.7 473.71C984.05 474.08 983.33 476.05 981.98 475.68Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M1020.35 476.53C1019.01 476.16 1019.73 474.2 1021.08 474.56C1022.42 474.93 1021.7 476.9 1020.35 476.53Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M951.87 507.88C950.52 507.51 951.24 505.55 952.59 505.91C953.93 506.28 953.21 508.25 951.87 507.88Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M967.75 425.59C966.41 425.23 967.13 423.26 968.47 423.62C969.82 423.99 969.09 425.96 967.75 425.59Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M817.91 328.86C816.57 328.49 817.29 326.52 818.63 326.89C819.97 327.25 819.25 329.22 817.91 328.86Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M774.63 274.69C773.29 274.32 774.01 272.36 775.35 272.72C776.7 273.09 775.98 275.06 774.63 274.69Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M779.6 372.3C778.26 371.93 778.98 369.96 780.33 370.33C781.67 370.7 780.95 372.67 779.6 372.3Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M857.62 470.6C856.27 470.23 856.99 468.26 858.34 468.63C859.68 469 858.96 470.96 857.62 470.6Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M654.42 630.72C653.08 630.35 653.8 628.38 655.14 628.75C656.48 629.12 655.76 631.09 654.42 630.72Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M699.21 564.02C697.86 563.66 698.59 561.69 699.93 562.05C701.27 562.42 700.55 564.39 699.21 564.02Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M931.28 619.69C929.94 619.32 930.66 617.35 932 617.72C933.34 618.08 932.62 620.05 931.28 619.69Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M961.3 743.38C959.96 743.02 960.68 741.05 962.03 741.41C963.37 741.78 962.65 743.75 961.3 743.38Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M1102.13 620.13C1100.79 619.77 1101.51 617.8 1102.85 618.17C1104.2 618.53 1103.48 620.5 1102.13 620.13Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M1100.27 719.73C1098.93 719.36 1099.65 717.39 1100.99 717.76C1102.33 718.12 1101.61 720.09 1100.27 719.73Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M1170.12 629.07C1168.77 628.7 1169.5 626.74 1170.84 627.1C1172.18 627.47 1171.46 629.44 1170.12 629.07Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M1173.96 618.57C1172.62 618.2 1173.34 616.24 1174.68 616.6C1176.03 616.97 1175.31 618.94 1173.96 618.57Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M1266.95 509.21C1265.61 508.84 1266.33 506.87 1267.67 507.24C1269.01 507.61 1268.29 509.58 1266.95 509.21Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M1203.54 382.17C1202.19 381.8 1202.91 379.84 1204.26 380.2C1205.6 380.57 1204.88 382.54 1203.54 382.17Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M1187.51 475.97C1186.16 475.6 1186.88 473.63 1188.23 474C1189.57 474.37 1188.85 476.34 1187.51 475.97Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M1277.21 431.16C1275.87 430.79 1276.59 428.83 1277.93 429.19C1279.27 429.56 1278.55 431.53 1277.21 431.16Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M1050.27 361.5C1048.93 361.13 1049.65 359.16 1050.99 359.53C1052.33 359.9 1051.61 361.87 1050.27 361.5Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M1105.07 434.21C1103.73 433.85 1104.45 431.88 1105.8 432.24C1107.14 432.61 1106.42 434.58 1105.07 434.21Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M1146.74 320.46C1145.39 320.1 1146.11 318.13 1147.46 318.49C1148.8 318.86 1148.08 320.83 1146.74 320.46Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M1146.74 320.46C1145.39 320.1 1146.11 318.13 1147.46 318.49C1148.8 318.86 1148.08 320.83 1146.74 320.46Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M970.12 285.71C968.78 285.35 969.5 283.38 970.84 283.75C972.18 284.11 971.46 286.08 970.12 285.71Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M880.35 286.23C879.01 285.86 879.73 283.89 881.07 284.26C882.41 284.63 881.69 286.6 880.35 286.23Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M903.2 290.54C901.86 290.18 902.58 288.21 903.92 288.58C905.26 288.94 904.54 290.91 903.2 290.54Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M872.17 197.37C870.83 197.01 871.55 195.04 872.89 195.4C874.24 195.77 873.52 197.74 872.17 197.37Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M834.22 262.09C832.88 261.72 833.6 259.75 834.94 260.12C836.28 260.48 835.56 262.45 834.22 262.09Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M849.68 214.33C848.33 213.96 849.05 211.99 850.4 212.36C851.74 212.73 851.02 214.7 849.68 214.33Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M894.46 197.68C893.11 197.31 893.83 195.35 895.18 195.71C896.52 196.08 895.8 198.05 894.46 197.68Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M896.03 121.11C894.69 120.74 895.41 118.78 896.75 119.14C898.09 119.51 897.37 121.48 896.03 121.11Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M885.06 156.62C883.72 156.25 884.44 154.28 885.78 154.65C887.13 155.01 886.41 156.98 885.06 156.62Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M850.68 133.75C849.34 133.39 850.06 131.42 851.4 131.79C852.75 132.15 852.02 134.12 850.68 133.75Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M864.7 151.06C863.36 150.69 864.08 148.72 865.43 149.09C866.77 149.46 866.05 151.42 864.7 151.06Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M826.33 150.21C824.99 149.84 825.71 147.87 827.05 148.24C828.4 148.6 827.68 150.57 826.33 150.21Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M843.56 158.76C842.22 158.39 842.94 156.42 844.28 156.79C845.62 157.16 844.9 159.13 843.56 158.76Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M825.48 169.22C824.13 168.86 824.85 166.89 826.2 167.25C827.54 167.62 826.82 169.59 825.48 169.22Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M820.99 181.47C819.65 181.11 820.37 179.14 821.71 179.5C823.05 179.87 822.33 181.84 820.99 181.47Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M820.99 181.47C819.65 181.11 820.37 179.14 821.71 179.5C823.05 179.87 822.33 181.84 820.99 181.47Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M788.96 168.88C787.61 168.51 788.33 166.54 789.68 166.91C791.02 167.27 790.3 169.24 788.96 168.88Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M791.02 202.16C789.67 201.8 790.39 199.83 791.74 200.2C793.08 200.56 792.36 202.53 791.02 202.16Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M769.45 194.35C768.1 193.98 768.83 192.01 770.17 192.38C771.51 192.75 770.79 194.72 769.45 194.35Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M772.44 202.87C771.09 202.5 771.81 200.53 773.16 200.9C774.5 201.26 773.78 203.23 772.44 202.87Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M724.88 193.73C723.54 193.37 724.26 191.4 725.6 191.76C726.95 192.13 726.23 194.1 724.88 193.73Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M735.06 221.54C733.72 221.17 734.44 219.2 735.78 219.57C737.12 219.93 736.4 221.9 735.06 221.54Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M730.5 239.54C729.16 239.17 729.88 237.21 731.22 237.57C732.56 237.94 731.84 239.91 730.5 239.54Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M685.37 234.92C684.02 234.55 684.75 232.58 686.09 232.95C687.43 233.32 686.71 235.29 685.37 234.92Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M685.37 234.92C684.02 234.55 684.75 232.58 686.09 232.95C687.43 233.32 686.71 235.29 685.37 234.92Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M682.45 220.65C681.11 220.28 681.83 218.31 683.17 218.68C684.51 219.05 683.79 221.01 682.45 220.65Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M684.3 221.15C682.96 220.79 683.68 218.82 685.02 219.18C686.37 219.55 685.64 221.52 684.3 221.15Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M694.12 227.68C692.78 227.32 693.5 225.35 694.85 225.72C696.19 226.08 695.47 228.05 694.12 227.68Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M695.76 245.46C694.42 245.09 695.14 243.12 696.48 243.49C697.82 243.85 697.1 245.82 695.76 245.46Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M691.91 255.96C690.57 255.59 691.29 253.62 692.64 253.99C693.98 254.35 693.26 256.32 691.91 255.96Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M670.55 280.92C669.21 280.56 669.93 278.59 671.28 278.96C672.62 279.32 671.9 281.29 670.55 280.92Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M670.55 280.92C669.21 280.56 669.93 278.59 671.28 278.96C672.62 279.32 671.9 281.29 670.55 280.92Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M666.85 279.91C665.51 279.55 666.23 277.58 667.57 277.94C668.92 278.31 668.2 280.28 666.85 279.91Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M666.85 279.91C665.51 279.55 666.23 277.58 667.57 277.94C668.92 278.31 668.2 280.28 666.85 279.91Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M666.85 279.91C665.51 279.55 666.23 277.58 667.57 277.94C668.92 278.31 668.2 280.28 666.85 279.91Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M666.85 279.91C665.51 279.55 666.23 277.58 667.57 277.94C668.92 278.31 668.2 280.28 666.85 279.91Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M831.16 259.32C829.82 258.96 830.54 256.99 831.88 257.36C833.22 257.72 832.5 259.69 831.16 259.32Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M776.2 248.17C774.86 247.8 775.58 245.83 776.92 246.2C778.27 246.57 777.55 248.54 776.2 248.17Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M776.2 248.17C774.86 247.8 775.58 245.83 776.92 246.2C778.27 246.57 777.55 248.54 776.2 248.17Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M776.2 248.17C774.86 247.8 775.58 245.83 776.92 246.2C778.27 246.57 777.55 248.54 776.2 248.17Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M786.17 243.19C784.83 242.82 785.55 240.86 786.89 241.22C788.23 241.59 787.51 243.56 786.17 243.19Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M825.18 242.29C823.84 241.93 824.56 239.96 825.9 240.32C827.25 240.69 826.53 242.66 825.18 242.29Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M815.78 251.28C814.44 250.91 815.16 248.94 816.51 249.31C817.85 249.67 817.13 251.64 815.78 251.28Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M710.42 311.06C709.07 310.69 709.79 308.72 711.14 309.09C712.48 309.46 711.76 311.42 710.42 311.06Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M769.87 209.87C768.53 209.5 769.25 207.53 770.59 207.9C771.94 208.26 771.22 210.23 769.87 209.87Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M766.6 224.37C765.25 224.01 765.97 222.04 767.32 222.4C768.66 222.77 767.94 224.74 766.6 224.37Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M574.96 202.85C573.61 202.48 574.33 200.51 575.68 200.88C577.02 201.25 576.3 203.21 574.96 202.85Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M591.39 274.71C590.05 274.34 590.77 272.37 592.11 272.74C593.46 273.11 592.74 275.08 591.39 274.71Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M567.68 339.46C566.34 339.09 567.06 337.13 568.4 337.49C569.74 337.86 569.02 339.83 567.68 339.46Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M579.79 261.92C578.45 261.55 579.17 259.58 580.51 259.95C581.85 260.32 581.13 262.28 579.79 261.92Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M494.57 294.48C493.23 294.11 493.95 292.14 495.29 292.51C496.64 292.87 495.92 294.84 494.57 294.48Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M511.87 297.27C510.53 296.91 511.25 294.94 512.59 295.3C513.93 295.67 513.21 297.64 511.87 297.27Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M478.26 361.25C476.92 360.88 477.64 358.91 478.98 359.28C480.33 359.64 479.6 361.61 478.26 361.25Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M518.91 378.12C517.57 377.75 518.29 375.78 519.63 376.15C520.97 376.52 520.25 378.49 518.91 378.12Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M475.05 420.05C473.71 419.68 474.43 417.71 475.77 418.08C477.11 418.44 476.39 420.41 475.05 420.05Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M467.22 452.56C465.87 452.19 466.59 450.22 467.94 450.59C469.28 450.95 468.56 452.92 467.22 452.56Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M468.21 472.08C466.87 471.71 467.59 469.74 468.93 470.11C470.27 470.48 469.55 472.44 468.21 472.08Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M466.67 298.41C465.32 298.04 466.04 296.07 467.39 296.44C468.73 296.8 468.01 298.77 466.67 298.41Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M616.34 390.04C614.1 389.43 615.3 386.15 617.54 386.76C619.78 387.37 618.58 390.65 616.34 390.04Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M489.76 413.23C487.52 412.62 488.72 409.34 490.96 409.95C493.2 410.56 492 413.84 489.76 413.23Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M452.75 353.08C450.51 352.47 451.71 349.19 453.95 349.8C456.19 350.41 454.99 353.69 452.75 353.08Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M828.1 634.58C825.86 633.97 827.06 630.69 829.3 631.3C831.54 631.91 830.33 635.2 828.1 634.58Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M1018.19 482.44C1015.95 481.83 1017.15 478.54 1019.39 479.16C1021.63 479.77 1020.43 483.05 1018.19 482.44Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M689.18 257.86C686.94 257.25 688.15 253.96 690.38 254.58C692.62 255.19 691.42 258.47 689.18 257.86Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M774.33 181.01C772.1 180.4 773.3 177.11 775.54 177.72C777.77 178.34 776.57 181.62 774.33 181.01Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M528.65 223.65C526.42 223.04 527.62 219.76 529.86 220.37C532.09 220.98 530.89 224.26 528.65 223.65Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M421.63 415.81C419.39 415.2 420.6 411.91 422.83 412.53C425.07 413.14 423.87 416.42 421.63 415.81Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M955.88 613.65C953.65 613.04 954.85 609.76 957.09 610.37C959.32 610.98 958.12 614.26 955.88 613.65Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M1142.85 464.5C1140.61 463.89 1141.81 460.6 1144.05 461.22C1146.29 461.83 1145.08 465.11 1142.85 464.5Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M1015.93 316.27C1013.7 315.66 1014.9 312.38 1017.14 312.99C1019.37 313.6 1018.17 316.88 1015.93 316.27Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M904.69 153.07C902.45 152.46 903.65 149.18 905.89 149.79C908.13 150.4 906.92 153.68 904.69 153.07Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M626.82 294.73C624.58 294.12 625.78 290.84 628.02 291.45C630.26 292.06 629.05 295.34 626.82 294.73Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M1005.63 744.66C1003.39 744.05 1004.59 740.76 1006.83 741.38C1009.07 741.99 1007.87 745.27 1005.63 744.66Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M1237.1 501.78C1234.86 501.17 1236.06 497.89 1238.3 498.5C1240.54 499.11 1239.33 502.39 1237.1 501.78Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M719.1 142.82C716.86 142.21 718.06 138.93 720.3 139.54C722.54 140.15 721.33 143.44 719.1 142.82Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M454.97 274.76C452.73 274.15 453.93 270.87 456.17 271.48C458.41 272.09 457.2 275.37 454.97 274.76Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M896.55 853.48C894.31 852.86 895.52 849.58 897.75 850.19C899.99 850.81 898.79 854.09 896.55 853.48Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M1118.75 758.22C1116.51 757.61 1117.71 754.32 1119.95 754.94C1122.19 755.55 1120.98 758.83 1118.75 758.22Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M1220.86 562.8C1218.62 562.19 1219.82 558.9 1222.06 559.52C1224.3 560.13 1223.09 563.41 1220.86 562.8Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M1253.98 388.97C1251.74 388.36 1252.95 385.07 1255.18 385.68C1257.42 386.3 1256.22 389.58 1253.98 388.97Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M480.88 281.83C478.64 281.22 479.84 277.94 482.08 278.55C484.32 279.16 483.12 282.44 480.88 281.83Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M470.28 238.51C468.04 237.9 469.24 234.62 471.48 235.23C473.72 235.84 472.52 239.12 470.28 238.51Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M517.63 114.77C515.4 114.16 516.6 110.88 518.84 111.49C521.07 112.1 519.87 115.38 517.63 114.77Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M305.68 332.17C303.44 331.56 304.64 328.28 306.88 328.89C309.12 329.5 307.91 332.78 305.68 332.17Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M940.84 827.07C938.6 826.46 939.8 823.17 942.04 823.79C944.28 824.4 943.07 827.68 940.84 827.07Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M1206.89 689.88C1204.65 689.27 1205.85 685.99 1208.09 686.6C1210.33 687.21 1209.13 690.49 1206.89 689.88Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M1124.68 580.81C1122.44 580.2 1123.64 576.92 1125.88 577.53C1128.12 578.14 1126.92 581.42 1124.68 580.81Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M1124.42 403.64C1122.18 403.03 1123.38 399.75 1125.62 400.36C1127.86 400.97 1126.65 404.25 1124.42 403.64Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M1034.91 581.33C1032.67 580.72 1033.87 577.43 1036.11 578.05C1038.35 578.66 1037.15 581.94 1034.91 581.33Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M632.91 500.44C630.67 499.83 631.88 496.55 634.11 497.16C636.35 497.77 635.15 501.05 632.91 500.44Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M649.38 322.06C647.14 321.45 648.34 318.17 650.58 318.78C652.82 319.39 651.62 322.68 649.38 322.06Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M820.87 320.76C818.64 320.15 819.84 316.87 822.08 317.48C824.31 318.09 823.11 321.37 820.87 320.76Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M553.7 299.79C551.47 299.18 552.67 295.9 554.91 296.51C557.14 297.12 555.94 300.4 553.7 299.79Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M591.98 456.54C589.75 455.93 590.95 452.65 593.18 453.26C595.42 453.87 594.22 457.15 591.98 456.54Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M850.23 646.4C848 645.79 849.2 642.51 851.44 643.12C853.67 643.73 852.47 647.02 850.23 646.4Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M831.28 826.03C829.04 825.42 830.24 822.14 832.48 822.75C834.71 823.36 833.51 826.64 831.28 826.03Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M1148.38 616.16C1146.14 615.55 1147.34 612.27 1149.58 612.88C1151.82 613.49 1150.62 616.77 1148.38 616.16Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M1107.89 487.68C1105.65 487.07 1106.85 483.79 1109.09 484.4C1111.33 485.01 1110.13 488.29 1107.89 487.68Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M968.88 861.67C966.64 861.06 967.84 857.78 970.08 858.39C972.32 859 971.12 862.28 968.88 861.67Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M1229.65 555.45C1225.18 554.23 1227.58 547.67 1232.06 548.89C1236.53 550.11 1234.13 556.68 1229.65 555.45Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M973.66 531.76C969.18 530.54 971.59 523.97 976.06 525.2C980.54 526.42 978.14 532.98 973.66 531.76Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M885.72 682.92C881.25 681.7 883.65 675.14 888.13 676.36C892.6 677.58 890.2 684.15 885.72 682.92Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M1056.54 438.89C1052.06 437.66 1054.46 431.1 1058.94 432.32C1063.42 433.55 1061.01 440.11 1056.54 438.89Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M807.75 829.11C803.28 827.89 805.68 821.33 810.15 822.55C814.63 823.77 812.23 830.33 807.75 829.11Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M512.17 257.53C507.7 256.31 510.1 249.75 514.58 250.97C519.05 252.19 516.65 258.75 512.17 257.53Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M552.8 474.6C548.32 473.38 550.72 466.81 555.2 468.04C559.68 469.26 557.27 475.82 552.8 474.6Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M833.82 724.58C829.34 723.36 831.75 716.79 836.22 718.01C840.7 719.24 838.3 725.8 833.82 724.58Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M1041.48 752.4C1037 751.18 1039.4 744.61 1043.88 745.84C1048.36 747.06 1045.95 753.62 1041.48 752.4Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M1216.46 769.38C1211.98 768.15 1214.38 761.59 1218.86 762.81C1223.34 764.03 1220.93 770.6 1216.46 769.38Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M974.19 836.05C969.72 834.83 972.12 828.27 976.59 829.49C981.07 830.71 978.67 837.28 974.19 836.05Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M1021.03 307.92C1016.55 306.69 1018.96 300.13 1023.43 301.35C1027.91 302.58 1025.51 309.14 1021.03 307.92Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M595.24 347.59C590.76 346.37 593.17 339.8 597.64 341.03C602.12 342.25 599.72 348.81 595.24 347.59Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M462.29 632.76C457.82 631.54 460.22 624.98 464.7 626.2C469.17 627.42 466.77 633.99 462.29 632.76Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M939.82 763.14C935.34 761.92 937.74 755.36 942.22 756.58C946.7 757.8 944.29 764.37 939.82 763.14Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M1193.21 549.35C1188.73 548.13 1191.13 541.57 1195.61 542.79C1200.09 544.01 1197.68 550.57 1193.21 549.35Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M1026.75 642.5C1022.28 641.28 1024.68 634.72 1029.16 635.94C1033.63 637.16 1031.23 643.73 1026.75 642.5Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M1112.64 357.96C1108.17 356.73 1110.57 350.17 1115.05 351.39C1119.52 352.62 1117.12 359.18 1112.64 357.96Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M965.08 521.84C962.84 521.22 964.04 517.94 966.28 518.55C968.52 519.17 967.32 522.45 965.08 521.84Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M1232.25 542.81C1230.01 542.2 1231.21 538.92 1233.45 539.53C1235.69 540.14 1234.49 543.42 1232.25 542.81Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M1322.88 473.23C1320.64 472.62 1321.85 469.34 1324.08 469.95C1326.32 470.56 1325.12 473.84 1322.88 473.23Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M1283 593.24C1280.76 592.63 1281.97 589.35 1284.2 589.96C1286.44 590.57 1285.24 593.85 1283 593.24Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M537.64 74.03C535.41 73.42 536.61 70.14 538.84 70.75C541.08 71.36 539.88 74.64 537.64 74.03Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M659.38 66.84C657.14 66.23 658.34 62.95 660.58 63.56C662.82 64.17 661.62 67.46 659.38 66.84Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M574.47 173.6C572.23 172.99 573.43 169.71 575.67 170.32C577.91 170.93 576.71 174.21 574.47 173.6Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M366.89 140.02C364.65 139.41 365.85 136.13 368.09 136.74C370.33 137.35 369.12 140.63 366.89 140.02Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M334.18 379.42C331.94 378.81 333.14 375.53 335.38 376.14C337.62 376.75 336.42 380.03 334.18 379.42Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M960.42 795.84C958.18 795.23 959.38 791.95 961.62 792.56C963.86 793.17 962.65 796.45 960.42 795.84Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M1175.69 808.42C1173.45 807.8 1174.66 804.52 1176.89 805.13C1179.13 805.74 1177.93 809.03 1175.69 808.42Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M1328.51 691.33C1326.28 690.72 1327.48 687.44 1329.72 688.05C1331.95 688.66 1330.75 691.94 1328.51 691.33Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M1281.45 444.59C1279.22 443.98 1280.42 440.7 1282.66 441.31C1284.89 441.92 1283.69 445.2 1281.45 444.59Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M899.85 144.05C897.61 143.44 898.81 140.16 901.05 140.77C903.29 141.38 902.08 144.66 899.85 144.05Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M763.28 75C761.04 74.39 762.24 71.11 764.48 71.72C766.72 72.33 765.52 75.61 763.28 75Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M1001.76 682.96C999.52 682.35 1000.72 679.07 1002.96 679.68C1005.2 680.29 1003.99 683.57 1001.76 682.96Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M873.91 881.94C871.67 881.33 872.87 878.05 875.11 878.66C877.35 879.27 876.15 882.56 873.91 881.94Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M1151.36 674.72C1149.12 674.11 1150.33 670.83 1152.56 671.44C1154.8 672.05 1153.6 675.33 1151.36 674.72Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M619.24 176.44C617.9 176.07 618.62 174.1 619.96 174.47C621.3 174.84 620.58 176.81 619.24 176.44Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M666.76 163.43C665.42 163.06 666.14 161.09 667.48 161.46C668.82 161.82 668.1 163.79 666.76 163.43Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M601.4 266.85C600.05 266.49 600.77 264.52 602.12 264.89C603.46 265.25 602.74 267.22 601.4 266.85Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M696.55 157.12C695.21 156.76 695.93 154.79 697.28 155.15C698.62 155.52 697.9 157.49 696.55 157.12Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M856.21 88.1C854.86 87.73 855.58 85.76 856.93 86.13C858.27 86.5 857.55 88.47 856.21 88.1Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M792.75 261.35C791.41 260.98 792.13 259.02 793.47 259.38C794.82 259.75 794.1 261.72 792.75 261.35Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M1096 442.32C1094.65 441.95 1095.38 439.99 1096.72 440.35C1098.06 440.72 1097.34 442.69 1096 442.32Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M1034.57 676.76C1033.22 676.39 1033.94 674.43 1035.29 674.79C1036.63 675.16 1035.91 677.13 1034.57 676.76Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M1204.45 754.91C1203.11 754.54 1203.83 752.57 1205.17 752.94C1206.51 753.31 1205.79 755.27 1204.45 754.91Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M1028.25 810.75C1026.91 810.38 1027.63 808.41 1028.97 808.78C1030.31 809.15 1029.59 811.12 1028.25 810.75Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M1111.66 674.71C1110.32 674.35 1111.04 672.38 1112.39 672.74C1113.73 673.11 1113.01 675.08 1111.66 674.71Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M120.95 444.64C119.61 444.27 120.33 442.3 121.67 442.67C123.02 443.04 122.29 445.01 120.95 444.64Z" />
              </g>
              <g id="&lt;Group&gt;">
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp1" d="M506.43 297.09C505.09 296.72 505.81 294.75 507.15 295.12C508.5 295.49 507.77 297.46 506.43 297.09Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp1" d="M286.22 503.2C284.88 502.83 285.6 500.86 286.94 501.23C288.29 501.6 287.56 503.56 286.22 503.2Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp1" d="M292.3 501.46C290.95 501.09 291.68 499.12 293.02 499.49C294.36 499.86 293.64 501.82 292.3 501.46Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp1" d="M277.93 553.13C276.59 552.77 277.31 550.8 278.65 551.17C280 551.53 279.27 553.5 277.93 553.13Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp1" d="M392.07 581.2C390.73 580.83 391.45 578.87 392.79 579.23C394.13 579.6 393.41 581.57 392.07 581.2Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp1" d="M413.47 533.39C412.13 533.02 412.85 531.05 414.19 531.42C415.53 531.78 414.81 533.75 413.47 533.39Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp1" d="M360.33 687.06C358.99 686.7 359.71 684.73 361.05 685.09C362.4 685.46 361.68 687.43 360.33 687.06Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp1" d="M434.07 700.9C432.72 700.53 433.44 698.56 434.79 698.93C436.13 699.29 435.41 701.26 434.07 700.9Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp1" d="M410.67 716.9C409.33 716.53 410.05 714.56 411.39 714.93C412.73 715.29 412.01 717.26 410.67 716.9Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp1" d="M282.52 721.84C281.17 721.47 281.9 719.5 283.24 719.87C284.58 720.24 283.86 722.21 282.52 721.84Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp1" d="M206.4 572.1C205.06 571.73 205.78 569.76 207.12 570.13C208.47 570.49 207.75 572.46 206.4 572.1Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp1" d="M217.66 472.4C216.32 472.04 217.04 470.07 218.39 470.43C219.73 470.8 219.01 472.77 217.66 472.4Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp1" d="M175.2 443.83C173.86 443.46 174.58 441.49 175.92 441.86C177.26 442.22 176.54 444.19 175.2 443.83Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp1" d="M152.75 444.96C151.4 444.59 152.12 442.63 153.47 442.99C154.81 443.36 154.09 445.33 152.75 444.96Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp1" d="M190.79 251.5C189.45 251.14 190.17 249.17 191.52 249.54C192.86 249.9 192.14 251.87 190.79 251.5Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp1" d="M187.41 256.68C186.07 256.31 186.79 254.34 188.13 254.71C189.48 255.08 188.76 257.05 187.41 256.68Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp1" d="M184.09 174.92C182.74 174.56 183.46 172.59 184.81 172.96C186.15 173.32 185.43 175.29 184.09 174.92Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp1" d="M83.49 183.04C82.15 182.68 82.87 180.71 84.21 181.08C85.55 181.44 84.83 183.41 83.49 183.04Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp1" d="M155.33 237.32C153.99 236.95 154.71 234.98 156.05 235.35C157.4 235.72 156.68 237.69 155.33 237.32Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp1" d="M171.5 106.03C170.16 105.66 170.88 103.69 172.22 104.06C173.57 104.43 172.84 106.39 171.5 106.03Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp1" d="M135.21 540.12C133.87 539.76 134.59 537.79 135.93 538.15C137.27 538.52 136.55 540.49 135.21 540.12Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp1" d="M349.86 713.03C348.52 712.66 349.24 710.7 350.58 711.06C351.93 711.43 351.21 713.4 349.86 713.03Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp1" d="M377.79 762.85C376.45 762.48 377.17 760.51 378.51 760.88C379.85 761.24 379.13 763.21 377.79 762.85Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp1" d="M309.19 823.33C307.85 822.96 308.57 820.99 309.91 821.36C311.26 821.72 310.53 823.69 309.19 823.33Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp1" d="M298.45 864.98C297.11 864.61 297.83 862.64 299.17 863.01C300.52 863.38 299.8 865.35 298.45 864.98Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp1" d="M255.21 856.94C253.86 856.58 254.58 854.61 255.93 854.98C257.27 855.34 256.55 857.31 255.21 856.94Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp1" d="M284.64 841.47C283.3 841.11 284.02 839.14 285.36 839.51C286.71 839.87 285.98 841.84 284.64 841.47Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp1" d="M611.23 782.22C609.89 781.85 610.61 779.89 611.95 780.25C613.3 780.62 612.58 782.59 611.23 782.22Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp1" d="M677.81 818.39C676.47 818.03 677.19 816.06 678.53 816.42C679.88 816.79 679.16 818.76 677.81 818.39Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp1" d="M676.52 812.1C675.18 811.73 675.9 809.76 677.24 810.13C678.58 810.5 677.86 812.47 676.52 812.1Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp1" d="M653.09 814.55C651.75 814.19 652.47 812.22 653.81 812.59C655.16 812.95 654.44 814.92 653.09 814.55Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp1" d="M455.06 771.92C453.72 771.55 454.44 769.58 455.79 769.95C457.13 770.32 456.41 772.28 455.06 771.92Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp1" d="M576.03 799.58C574.69 799.21 575.41 797.24 576.75 797.61C578.09 797.98 577.37 799.94 576.03 799.58Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp1" d="M699.31 857.37C697.97 857.01 698.69 855.04 700.03 855.41C701.37 855.77 700.65 857.74 699.31 857.37Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp1" d="M698.03 608.23C696.69 607.86 697.41 605.9 698.75 606.26C700.09 606.63 699.37 608.6 698.03 608.23Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp1" d="M688.51 643.96C687.16 643.59 687.88 641.63 689.23 641.99C690.57 642.36 689.85 644.33 688.51 643.96Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp1" d="M816.34 678.5C814.99 678.13 815.72 676.17 817.06 676.53C818.4 676.9 817.68 678.87 816.34 678.5Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp1" d="M628.15 728.48C626.81 728.11 627.53 726.14 628.87 726.51C630.21 726.88 629.49 728.84 628.15 728.48Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp1" d="M554.8 725.74C553.46 725.37 554.18 723.4 555.52 723.77C556.87 724.13 556.15 726.1 554.8 725.74Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp1" d="M737.53 884.88C736.18 884.52 736.91 882.55 738.25 882.92C739.59 883.28 738.87 885.25 737.53 884.88Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp1" d="M917.97 866.04C916.63 865.67 917.35 863.7 918.69 864.07C920.04 864.43 919.31 866.4 917.97 866.04Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp1" d="M991.92 885.95C990.57 885.58 991.29 883.61 992.64 883.98C993.98 884.35 993.26 886.32 991.92 885.95Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp1" d="M1030.45 870.38C1029.11 870.02 1029.83 868.05 1031.17 868.41C1032.51 868.78 1031.79 870.75 1030.45 870.38Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp1" d="M1085.83 903.29C1084.48 902.92 1085.21 900.95 1086.55 901.32C1087.89 901.68 1087.17 903.65 1085.83 903.29Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp1" d="M1118.91 893.8C1117.56 893.43 1118.28 891.46 1119.63 891.83C1120.97 892.19 1120.25 894.16 1118.91 893.8Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp1" d="M1069.15 903.56C1067.81 903.2 1068.53 901.23 1069.87 901.6C1071.21 901.96 1070.49 903.93 1069.15 903.56Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp1" d="M599.85 853.44C598.5 853.07 599.22 851.1 600.57 851.47C601.91 851.83 601.19 853.8 599.85 853.44Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp1" d="M416.44 809.8C415.09 809.43 415.81 807.47 417.16 807.83C418.5 808.2 417.78 810.17 416.44 809.8Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp1" d="M312.31 796.64C310.96 796.27 311.68 794.31 313.03 794.67C314.37 795.04 313.65 797.01 312.31 796.64Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp1" d="M416.45 823.5C415.1 823.13 415.83 821.16 417.17 821.53C418.51 821.9 417.79 823.86 416.45 823.5Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp1" d="M516.49 771.93C515.14 771.57 515.87 769.6 517.21 769.96C518.55 770.33 517.83 772.3 516.49 771.93Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp1" d="M544.27 614.56C542.92 614.19 543.65 612.22 544.99 612.59C546.33 612.96 545.61 614.93 544.27 614.56Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp1" d="M558.7 697.21C557.36 696.85 558.08 694.88 559.42 695.24C560.77 695.61 560.04 697.58 558.7 697.21Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp1" d="M560.82 649.66C559.47 649.29 560.19 647.32 561.54 647.69C562.88 648.05 562.16 650.02 560.82 649.66Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp1" d="M1047.27 126.76C1045.93 126.39 1046.65 124.42 1047.99 124.79C1049.33 125.16 1048.61 127.13 1047.27 126.76Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp1" d="M1041.38 128.66C1040.04 128.29 1040.76 126.32 1042.1 126.69C1043.44 127.06 1042.72 129.02 1041.38 128.66Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp1" d="M1119.73 122.77C1118.39 122.41 1119.11 120.44 1120.45 120.8C1121.8 121.17 1121.07 123.14 1119.73 122.77Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp1" d="M1181.3 51.44C1179.96 51.08 1180.68 49.11 1182.02 49.48C1183.36 49.84 1182.64 51.81 1181.3 51.44Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp1" d="M1047.73 74.04C1046.39 73.67 1047.11 71.7 1048.45 72.07C1049.8 72.44 1049.07 74.41 1047.73 74.04Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp1" d="M1124.78 74.68C1123.43 74.31 1124.15 72.34 1125.5 72.71C1126.84 73.08 1126.12 75.04 1124.78 74.68Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp1" d="M938.39 139.61C937.04 139.24 937.76 137.27 939.11 137.64C940.45 138 939.73 139.97 938.39 139.61Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp1" d="M996.06 269.18C994.72 268.81 995.44 266.84 996.78 267.21C998.12 267.58 997.4 269.54 996.06 269.18Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp1" d="M1143.56 218.91C1142.22 218.55 1142.94 216.58 1144.29 216.95C1145.63 217.31 1144.91 219.28 1143.56 218.91Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp1" d="M1162.14 194.14C1160.8 193.77 1161.52 191.8 1162.87 192.17C1164.21 192.54 1163.49 194.51 1162.14 194.14Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp1" d="M1266.52 207.48C1265.17 207.12 1265.9 205.15 1267.24 205.51C1268.58 205.88 1267.86 207.85 1266.52 207.48Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp1" d="M1299.04 104.81C1297.7 104.44 1298.42 102.47 1299.76 102.84C1301.1 103.2 1300.38 105.17 1299.04 104.81Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp1" d="M1332.32 158.12C1330.97 157.75 1331.69 155.78 1333.04 156.15C1334.38 156.52 1333.66 158.49 1332.32 158.12Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp1" d="M1370.2 85.09C1368.86 84.73 1369.58 82.76 1370.92 83.12C1372.26 83.49 1371.54 85.46 1370.2 85.09Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp1" d="M1319.7 216.88C1318.36 216.52 1319.08 214.55 1320.42 214.91C1321.77 215.28 1321.05 217.25 1319.7 216.88Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp1" d="M1423 347.03C1421.65 346.66 1422.38 344.69 1423.72 345.06C1425.06 345.42 1424.34 347.39 1423 347.03Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp1" d="M1408.06 382.22C1406.71 381.86 1407.43 379.89 1408.78 380.26C1410.12 380.62 1409.4 382.59 1408.06 382.22Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp1" d="M1419.48 435.28C1418.14 434.91 1418.86 432.94 1420.2 433.31C1421.54 433.67 1420.82 435.64 1419.48 435.28Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp1" d="M1378.68 453.56C1377.34 453.2 1378.06 451.23 1379.4 451.6C1380.75 451.96 1380.03 453.93 1378.68 453.56Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp1" d="M1389.95 596.6C1388.6 596.23 1389.33 594.26 1390.67 594.63C1392.01 595 1391.29 596.96 1389.95 596.6Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp1" d="M1378.77 635.47C1377.43 635.11 1378.15 633.14 1379.49 633.51C1380.84 633.87 1380.11 635.84 1378.77 635.47Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp1" d="M1316.86 508.02C1315.51 507.65 1316.24 505.68 1317.58 506.05C1318.92 506.41 1318.2 508.38 1316.86 508.02Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp1" d="M1254.14 352.07C1252.8 351.7 1253.52 349.73 1254.86 350.1C1256.2 350.47 1255.48 352.43 1254.14 352.07Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp1" d="M1229.8 331.45C1228.46 331.09 1229.18 329.12 1230.52 329.48C1231.87 329.85 1231.15 331.82 1229.8 331.45Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp1" d="M1087.89 245.09C1086.55 244.73 1087.27 242.76 1088.61 243.13C1089.95 243.49 1089.23 245.46 1087.89 245.09Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp1" d="M995.64 228.92C994.3 228.55 995.02 226.59 996.36 226.95C997.71 227.32 996.99 229.29 995.64 228.92Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp1" d="M1055.93 236.2C1054.58 235.83 1055.31 233.86 1056.65 234.23C1057.99 234.59 1057.27 236.56 1055.93 236.2Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp1" d="M940.24 185.68C938.9 185.31 939.62 183.34 940.96 183.71C942.31 184.07 941.58 186.04 940.24 185.68Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp1" d="M867.12 160.13C865.77 159.76 866.49 157.79 867.84 158.16C869.18 158.53 868.46 160.5 867.12 160.13Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp1" d="M1036.96 213.88C1035.61 213.52 1036.33 211.55 1037.68 211.91C1039.02 212.28 1038.3 214.25 1036.96 213.88Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp1" d="M1064.06 215.57C1062.72 215.21 1063.44 213.24 1064.79 213.6C1066.13 213.97 1065.41 215.94 1064.06 215.57Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp1" d="M848.55 201.4C847.21 201.03 847.93 199.06 849.27 199.43C850.61 199.8 849.89 201.77 848.55 201.4Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp1" d="M895.33 294.01C893.99 293.64 894.71 291.68 896.05 292.04C897.39 292.41 896.67 294.38 895.33 294.01Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp1" d="M948.92 239.7C947.58 239.33 948.3 237.36 949.64 237.73C950.99 238.1 950.27 240.07 948.92 239.7Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp1" d="M933.83 231.45C932.49 231.08 933.21 229.11 934.55 229.48C935.89 229.85 935.17 231.82 933.83 231.45Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp1" d="M944.34 256.7C943 256.33 943.72 254.36 945.06 254.73C946.4 255.1 945.68 257.07 944.34 256.7Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp1" d="M907.94 251.24C906.59 250.88 907.32 248.91 908.66 249.27C910 249.64 909.28 251.61 907.94 251.24Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp1" d="M915.43 302.21C914.09 301.84 914.81 299.87 916.15 300.24C917.49 300.61 916.77 302.58 915.43 302.21Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp1" d="M583.88 160.28C582.53 159.91 583.26 157.94 584.6 158.31C585.94 158.67 585.22 160.64 583.88 160.28Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp1" d="M563.47 112.32C562.13 111.95 562.85 109.98 564.19 110.35C565.53 110.71 564.81 112.68 563.47 112.32Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp1" d="M560.3 97.73C558.96 97.36 559.68 95.4 561.02 95.76C562.36 96.13 561.64 98.1 560.3 97.73Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp1" d="M566.75 97.68C565.4 97.31 566.13 95.34 567.47 95.71C568.81 96.08 568.09 98.05 566.75 97.68Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp1" d="M296.14 405.42C294.8 405.05 295.52 403.09 296.86 403.45C298.2 403.82 297.48 405.79 296.14 405.42Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp1" d="M296.38 410.35C295.04 409.98 295.76 408.01 297.1 408.38C298.44 408.75 297.72 410.72 296.38 410.35Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp1" d="M339.97 400.04C338.63 399.67 339.35 397.7 340.69 398.07C342.04 398.44 341.32 400.4 339.97 400.04Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp1" d="M332.29 430.65C330.95 430.28 331.67 428.31 333.01 428.68C334.35 429.05 333.63 431.02 332.29 430.65Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp1" d="M515.73 540.32C514.38 539.95 515.11 537.99 516.45 538.35C517.79 538.72 517.07 540.69 515.73 540.32Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp1" d="M738.22 659.64C736.88 659.27 737.6 657.31 738.94 657.67C740.29 658.04 739.57 660.01 738.22 659.64Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp1" d="M773.19 705.43C771.85 705.07 772.57 703.1 773.91 703.46C775.25 703.83 774.53 705.8 773.19 705.43Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp1" d="M773.09 725.4C771.75 725.04 772.47 723.07 773.82 723.43C775.16 723.8 774.44 725.77 773.09 725.4Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp1" d="M742.98 725.02C741.64 724.66 742.36 722.69 743.7 723.05C745.04 723.42 744.32 725.39 742.98 725.02Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp1" d="M723.45 723.03C722.1 722.67 722.82 720.7 724.17 721.06C725.51 721.43 724.79 723.4 723.45 723.03Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp1" d="M764.16 736.31C762.82 735.94 763.54 733.97 764.88 734.34C766.23 734.71 765.51 736.67 764.16 736.31Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp1" d="M745.57 770.86C744.22 770.49 744.94 768.52 746.29 768.89C747.63 769.25 746.91 771.22 745.57 770.86Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp1" d="M486.77 920.18C485.43 919.82 486.15 917.85 487.49 918.22C488.84 918.58 488.12 920.55 486.77 920.18Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp1" d="M487.96 914.06C486.61 913.7 487.33 911.73 488.68 912.1C490.02 912.46 489.3 914.43 487.96 914.06Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp1" d="M587.55 932.16C586.21 931.8 586.93 929.83 588.27 930.19C589.62 930.56 588.89 932.53 587.55 932.16Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp1" d="M687.09 910.77C685.75 910.4 686.47 908.43 687.81 908.8C689.16 909.16 688.44 911.13 687.09 910.77Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp1" d="M653.26 919.83C651.92 919.46 652.64 917.49 653.98 917.86C655.32 918.23 654.6 920.2 653.26 919.83Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp1" d="M866.74 951C865.4 950.63 866.12 948.66 867.46 949.03C868.81 949.4 868.09 951.37 866.74 951Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp1" d="M937.64 932.49C936.3 932.13 937.02 930.16 938.37 930.52C939.71 930.89 938.99 932.86 937.64 932.49Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp1" d="M1069.22 949.2C1067.88 948.84 1068.6 946.87 1069.94 947.23C1071.29 947.6 1070.57 949.57 1069.22 949.2Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp1" d="M1098.77 950.08C1097.43 949.71 1098.15 947.74 1099.49 948.11C1100.83 948.47 1100.11 950.44 1098.77 950.08Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp1" d="M1107.21 944.19C1105.87 943.82 1106.59 941.85 1107.93 942.22C1109.27 942.59 1108.55 944.55 1107.21 944.19Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp1" d="M1180.06 916.65C1178.72 916.28 1179.44 914.31 1180.79 914.68C1182.13 915.04 1181.41 917.01 1180.06 916.65Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp1" d="M1256.5 929.6C1255.16 929.24 1255.88 927.27 1257.22 927.63C1258.57 928 1257.85 929.97 1256.5 929.6Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp1" d="M1230.8 901.42C1229.46 901.06 1230.18 899.09 1231.52 899.45C1232.87 899.82 1232.15 901.79 1230.8 901.42Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp1" d="M939.06 717.93C937.71 717.56 938.44 715.6 939.78 715.96C941.12 716.33 940.4 718.3 939.06 717.93Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp1" d="M850.76 658.6C849.41 658.24 850.14 656.27 851.48 656.64C852.82 657 852.1 658.97 850.76 658.6Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp1" d="M789.63 698.3C788.28 697.93 789 695.96 790.35 696.33C791.69 696.7 790.97 698.66 789.63 698.3Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp1" d="M716.17 854.79C714.83 854.43 715.55 852.46 716.9 852.82C718.24 853.19 717.52 855.16 716.17 854.79Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp1" d="M785.58 772.77C784.24 772.4 784.96 770.43 786.3 770.8C787.64 771.17 786.92 773.14 785.58 772.77Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp1" d="M660.24 823.45C658.89 823.08 659.61 821.11 660.96 821.48C662.3 821.84 661.58 823.81 660.24 823.45Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp1" d="M232.64 841.11C231.29 840.74 232.02 838.78 233.36 839.14C234.7 839.51 233.98 841.48 232.64 841.11Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp1" d="M423.76 683.67C422.42 683.3 423.14 681.33 424.48 681.7C425.82 682.06 425.1 684.03 423.76 683.67Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp1" d="M646.11 634.59C644.77 634.23 645.49 632.26 646.84 632.62C648.18 632.99 647.46 634.96 646.11 634.59Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp1" d="M472.06 489.32C470.71 488.95 471.43 486.98 472.78 487.35C474.12 487.71 473.4 489.68 472.06 489.32Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp1" d="M277.81 267.82C276.47 267.45 277.19 265.48 278.53 265.85C279.87 266.21 279.15 268.18 277.81 267.82Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp1" d="M268.93 265.87C267.59 265.51 268.31 263.54 269.65 263.91C271 264.27 270.28 266.24 268.93 265.87Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp1" d="M270.84 272.63C269.5 272.26 270.22 270.29 271.56 270.66C272.91 271.02 272.18 272.99 270.84 272.63Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp1" d="M271.99 243.96C270.65 243.59 271.37 241.62 272.72 241.99C274.06 242.36 273.34 244.33 271.99 243.96Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp1" d="M271.99 19.06C270.65 18.7 271.37 16.73 272.72 17.09C274.06 17.46 273.34 19.43 271.99 19.06Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp1" d="M151.67 19.06C150.33 18.7 151.05 16.73 152.39 17.09C153.73 17.46 153.01 19.43 151.67 19.06Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp1" d="M456.74 8.05C455.4 7.68 456.12 5.71 457.46 6.08C458.81 6.45 458.08 8.41 456.74 8.05Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp1" d="M629.15 32.14C627.81 31.78 628.53 29.81 629.88 30.17C631.22 30.54 630.5 32.51 629.15 32.14Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp1" d="M645.07 45.97C643.72 45.6 644.44 43.63 645.79 44C647.13 44.36 646.41 46.33 645.07 45.97Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp1" d="M652.94 122.68C651.59 122.31 652.32 120.34 653.66 120.71C655 121.08 654.28 123.05 652.94 122.68Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp1" d="M691.67 129.3C690.33 128.93 691.05 126.96 692.39 127.33C693.74 127.7 693.01 129.66 691.67 129.3Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp1" d="M697.84 163.92C696.5 163.55 697.22 161.59 698.56 161.95C699.91 162.32 699.19 164.29 697.84 163.92Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp1" d="M717.71 159.17C716.37 158.8 717.09 156.83 718.44 157.2C719.78 157.56 719.06 159.53 717.71 159.17Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp1" d="M737.97 174.75C736.63 174.38 737.35 172.41 738.69 172.78C740.03 173.15 739.31 175.12 737.97 174.75Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp1" d="M172.94 714.05C171.6 713.68 172.32 711.72 173.66 712.08C175 712.45 174.28 714.42 172.94 714.05Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp1" d="M181.37 711.66C180.02 711.3 180.74 709.33 182.09 709.7C183.43 710.06 182.71 712.03 181.37 711.66Z" />
                </g>
                <g id="&lt;Group&gt;">
                  <path id="&lt;Path&gt;" class="shp1" d="M144.34 782.68C143 782.31 143.72 780.34 145.07 780.71C146.41 781.08 145.69 783.05 144.34 782.68Z" />
                </g>
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M967.94 416.74C965.7 416.13 966.9 412.85 969.14 413.46C971.38 414.07 970.18 417.35 967.94 416.74Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M664.48 253.04C662.24 252.43 663.44 249.15 665.68 249.76C667.92 250.37 666.72 253.65 664.48 253.04Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M840.79 188.56C838.55 187.95 839.75 184.67 841.99 185.28C844.23 185.89 843.03 189.17 840.79 188.56Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M586.43 182.64C584.19 182.03 585.39 178.75 587.63 179.36C589.87 179.97 588.67 183.25 586.43 182.64Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M661.4 128.03C659.16 127.42 660.36 124.14 662.6 124.75C664.84 125.36 663.64 128.64 661.4 128.03Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M364.63 246.24C362.39 245.63 363.59 242.35 365.83 242.96C368.07 243.57 366.87 246.85 364.63 246.24Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M565.04 407.8C562.81 407.19 564.01 403.91 566.25 404.52C568.48 405.13 567.28 408.41 565.04 407.8Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M433.72 216.02C431.49 215.41 432.69 212.13 434.93 212.74C437.16 213.35 435.96 216.63 433.72 216.02Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M1036.36 663.53C1034.12 662.92 1035.32 659.64 1037.56 660.25C1039.8 660.86 1038.59 664.15 1036.36 663.53Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M1241.72 503.04C1239.49 502.43 1240.69 499.15 1242.92 499.76C1245.16 500.37 1243.96 503.65 1241.72 503.04Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M1209.5 332.54C1207.26 331.93 1208.46 328.65 1210.7 329.26C1212.94 329.87 1211.73 333.16 1209.5 332.54Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M1190.58 434.22C1188.34 433.61 1189.55 430.33 1191.78 430.94C1194.02 431.55 1192.82 434.83 1190.58 434.22Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M794.77 155.79C792.53 155.17 793.73 151.89 795.97 152.5C798.21 153.12 797.01 156.4 794.77 155.79Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M610.91 7.41C608.67 6.8 609.87 3.52 612.11 4.13C614.34 4.74 613.14 8.02 610.91 7.41Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M453.39 53.92C451.16 53.31 452.36 50.02 454.59 50.63C456.83 51.25 455.63 54.53 453.39 53.92Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M923.14 880.95C920.9 880.34 922.1 877.05 924.34 877.67C926.58 878.28 925.38 881.56 923.14 880.95Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M1160.21 783.98C1157.97 783.36 1159.17 780.08 1161.41 780.69C1163.65 781.31 1162.45 784.59 1160.21 783.98Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M872.84 893.2C870.6 892.59 871.81 889.31 874.04 889.92C876.28 890.53 875.08 893.81 872.84 893.2Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M820.08 953.87C817.84 953.26 819.05 949.98 821.28 950.59C823.52 951.2 822.32 954.48 820.08 953.87Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M796.7 892.63C794.47 892.02 795.67 888.73 797.91 889.35C800.14 889.96 798.94 893.24 796.7 892.63Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M1069.22 857.31C1066.98 856.7 1068.19 853.42 1070.42 854.03C1072.66 854.64 1071.46 857.92 1069.22 857.31Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M1253.56 595.79C1251.33 595.18 1252.53 591.9 1254.77 592.51C1257 593.12 1255.8 596.4 1253.56 595.79Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M1342.63 527.71C1340.39 527.1 1341.59 523.81 1343.83 524.43C1346.07 525.04 1344.87 528.32 1342.63 527.71Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M1067.68 386.22C1065.44 385.61 1066.64 382.33 1068.88 382.94C1071.12 383.55 1069.92 386.84 1067.68 386.22Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M666.09 198.61C663.85 198 665.05 194.72 667.29 195.33C669.53 195.94 668.33 199.23 666.09 198.61Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M537.83 281.98C535.59 281.37 536.79 278.09 539.03 278.7C541.27 279.31 540.07 282.59 537.83 281.98Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M446.52 381.21C444.28 380.6 445.48 377.32 447.72 377.93C449.96 378.54 448.76 381.83 446.52 381.21Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M492.11 448.52C489.87 447.91 491.07 444.63 493.31 445.24C495.55 445.85 494.34 449.13 492.11 448.52Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M891.66 725.09C889.42 724.48 890.62 721.2 892.86 721.81C895.1 722.42 893.89 725.7 891.66 725.09Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M1059.64 658.34C1057.4 657.73 1058.6 654.45 1060.84 655.06C1063.08 655.67 1061.87 658.95 1059.64 658.34Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M1126.49 584.19C1124.25 583.58 1125.46 580.3 1127.69 580.91C1129.93 581.52 1128.73 584.81 1126.49 584.19Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M1094.12 722.62C1091.88 722.01 1093.08 718.73 1095.32 719.34C1097.56 719.95 1096.36 723.23 1094.12 722.62Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M1173.61 380.5C1171.37 379.89 1172.57 376.6 1174.81 377.22C1177.05 377.83 1175.85 381.11 1173.61 380.5Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M1270.77 482.1C1268.53 481.49 1269.73 478.21 1271.97 478.82C1274.21 479.43 1273.01 482.71 1270.77 482.1Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M1293.83 569.24C1291.59 568.63 1292.79 565.35 1295.03 565.96C1297.26 566.57 1296.06 569.86 1293.83 569.24Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M872.19 127.84C869.95 127.23 871.15 123.94 873.39 124.56C875.63 125.17 874.43 128.45 872.19 127.84Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M806.72 239.9C804.48 239.29 805.68 236.01 807.92 236.62C810.16 237.23 808.96 240.51 806.72 239.9Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M720.55 225.03C718.31 224.42 719.51 221.14 721.75 221.75C723.98 222.36 722.78 225.64 720.55 225.03Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M697.26 305.3C695.02 304.69 696.22 301.41 698.46 302.02C700.7 302.63 699.49 305.91 697.26 305.3Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M486.98 412.48C484.75 411.86 485.95 408.58 488.19 409.19C490.42 409.81 489.22 413.09 486.98 412.48Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M530.03 311.62C527.79 311.01 529 307.72 531.23 308.33C533.47 308.95 532.27 312.23 530.03 311.62Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M1053.13 584.38C1050.89 583.77 1052.1 580.49 1054.33 581.1C1056.57 581.71 1055.37 584.99 1053.13 584.38Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M1093.18 575.1C1090.94 574.49 1092.14 571.21 1094.38 571.82C1096.62 572.43 1095.42 575.71 1093.18 575.1Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M680.06 343.92C677.82 343.31 679.02 340.02 681.26 340.63C683.5 341.25 682.3 344.53 680.06 343.92Z" />
              </g>
              <g id="&lt;Group&gt;">
                <path id="&lt;Path&gt;" class="shp1" d="M1021.24 312.91C1019 312.3 1020.2 309.01 1022.44 309.63C1024.68 310.24 1023.48 313.52 1021.24 312.91Z" />
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
    <div class="title">BILAG 2: EN SÆRLIG PERSON JEG KENDER, SOM ER MODIG OG OMSORGSFULD!!!</div>
    <div class="star-container">
      <svg class="star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1320 1258" width="1320" height="1258">
        <title>Star</title>
        <g id="Object">
          <g id="&lt;Group&gt;">
            <path id="&lt;Path&gt;" class="shp0-star" d="M678.99 12.07L866.54 392.07C869.62 398.32 875.59 402.66 882.48 403.66L1301.84 464.6C1319.21 467.12 1326.15 488.47 1313.58 500.73L1010.13 796.52C1005.14 801.38 1002.86 808.39 1004.04 815.26L1075.67 1232.93C1078.64 1250.23 1060.48 1263.42 1044.94 1255.26L669.86 1058.06C663.69 1054.82 656.31 1054.82 650.14 1058.06L275.06 1255.26C259.52 1263.42 241.36 1250.23 244.33 1232.93L315.96 815.26C317.14 808.39 314.86 801.38 309.87 796.52L6.42 500.73C-6.15 488.47 0.79 467.12 18.16 464.6L437.51 403.66C444.41 402.66 450.38 398.32 453.46 392.07L641.01 12.07C648.77 -3.67 671.22 -3.67 678.99 12.07Z" />
            <g id="&lt;Group&gt;">
              <path id="&lt;Path&gt;" class="shp1-star" d="M660 99.85L492.87 423.56C484.11 440.54 467.28 451.87 448.25 453.61L85.38 486.73L468.76 504.66C493.11 505.8 515.39 491.04 523.85 468.17L660 99.85Z" />
            </g>
            <path id="&lt;Path&gt;" class="shp2-star" d="M252.57 1184.87L244.33 1232.93C241.36 1250.23 259.52 1263.43 275.06 1255.25L650.14 1058.06C656.31 1054.82 663.69 1054.82 669.86 1058.06L1044.94 1255.25C1060.48 1263.43 1078.64 1250.23 1075.67 1232.93L1004.04 815.26C1002.86 808.39 1005.14 801.38 1010.13 796.51L1313.58 500.73C1326.15 488.47 1319.21 467.12 1301.84 464.6L1161.38 444.19C934.2 851.89 586.33 1066.55 252.57 1184.87Z" />
          </g>
        </g>
      </svg>
      <div class="star-text">
        <p><strong>Jeg er også MODIG <br>og OMSORGSFULD!</strong></p>
      </div>
    </div>
    <div class="cloud-container" id="cloud-1">
      <svg class="cloud" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 117 70" width="117" height="70">
        <g id="Layer 2">
          <g id="&lt;Group&gt;">
            <path id="&lt;Path&gt;" class="shp0-cloud " d="M116.26 38.58C116.26 31.17 110.25 25.16 102.83 25.16C102.47 25.16 102.12 25.18 101.76 25.21C101.76 25.19 101.77 25.18 101.77 25.16C101.77 16.21 94.51 8.96 85.57 8.96C82.2 8.96 79.08 9.99 76.48 11.75C72.81 5.13 65.76 0.65 57.65 0.65C49.76 0.65 42.86 4.91 39.11 11.25C36.61 9.8 33.7 8.96 30.59 8.96C21.27 8.96 13.71 16.43 13.55 25.71C5.71 27.7 -0.1 34.81 -0.1 43.27C-0.1 53.27 8.01 61.38 18.02 61.38C18.7 61.38 19.37 61.34 20.04 61.27C22.61 64.2 26.38 66.05 30.59 66.05C34.6 66.05 38.22 64.37 40.78 61.67C44.78 66.54 50.86 69.65 57.65 69.65C62.96 69.65 67.83 67.75 71.61 64.6C74.99 66.44 78.86 67.49 82.98 67.49C93.29 67.49 102.06 60.93 105.37 51.76C111.57 50.57 116.26 45.13 116.26 38.58Z" />
          </g>
        </g>
      </svg>
      <div class="cloud-text">I min familie.</div>
    </div>
    <div class="cloud-container" id="cloud-2">
      <svg class="cloud" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 117 70" width="117" height="70">
        <g id="Layer 2">
          <g id="&lt;Group&gt;">
            <path id="&lt;Path&gt;" class="shp0-cloud " d="M116.26 38.58C116.26 31.17 110.25 25.16 102.83 25.16C102.47 25.16 102.12 25.18 101.76 25.21C101.76 25.19 101.77 25.18 101.77 25.16C101.77 16.21 94.51 8.96 85.57 8.96C82.2 8.96 79.08 9.99 76.48 11.75C72.81 5.13 65.76 0.65 57.65 0.65C49.76 0.65 42.86 4.91 39.11 11.25C36.61 9.8 33.7 8.96 30.59 8.96C21.27 8.96 13.71 16.43 13.55 25.71C5.71 27.7 -0.1 34.81 -0.1 43.27C-0.1 53.27 8.01 61.38 18.02 61.38C18.7 61.38 19.37 61.34 20.04 61.27C22.61 64.2 26.38 66.05 30.59 66.05C34.6 66.05 38.22 64.37 40.78 61.67C44.78 66.54 50.86 69.65 57.65 69.65C62.96 69.65 67.83 67.75 71.61 64.6C74.99 66.44 78.86 67.49 82.98 67.49C93.29 67.49 102.06 60.93 105.37 51.76C111.57 50.57 116.26 45.13 116.26 38.58Z" />
          </g>
        </g>
      </svg>
      <div class="cloud-text">En, der er <br>omsorgsfuld <br>overfor alle.</div>
    </div>
    <div class="cloud-container" id="cloud-3">
      <svg class="cloud" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 93 62" width="93" height="62">
        <g id="Layer 2">
          <g id="&lt;Group&gt;">
            <path id="&lt;Compound Path&gt;" class="shp0-cloud" d="M92.33 34.73C92.33 29.03 87.75 24.41 82.07 24.33C82.07 24.2 82.09 24.07 82.09 23.94C82.09 18.11 77.36 13.38 71.53 13.38C70.73 13.38 69.95 13.48 69.2 13.65C66.82 6.21 59.85 0.82 51.62 0.82C44.27 0.82 37.92 5.12 34.95 11.34C32.56 9.81 29.72 8.93 26.68 8.93C18.17 8.93 11.28 15.82 11.28 24.33C11.28 25.27 11.37 26.18 11.53 27.08C5.13 28.45 0.33 34.14 0.33 40.94C0.33 48.78 6.68 55.13 14.52 55.13C16.65 55.13 18.67 54.65 20.49 53.81C22.64 58.51 27.39 61.78 32.9 61.78C36.24 61.78 39.31 60.57 41.68 58.57C43.21 60.56 45.61 61.85 48.31 61.85C52.06 61.85 55.23 59.38 56.29 55.98C59.02 58.63 62.74 60.27 66.84 60.27C75.2 60.27 81.98 53.49 81.98 45.13L81.98 45.13C87.7 45.1 92.33 40.46 92.33 34.73Z" />
          </g>
        </g>
      </svg>
      <div class="cloud-text">I min børnehave <br>/ skole.</div>
    </div>
    <div class="cloud-container" id="cloud-4">
      <svg class="cloud" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 195 92" width="195" height="92">
        <g id="Layer 2">
          <g id="&lt;Group&gt;">
            <path id="&lt;Path&gt;" class="shp0-cloud" d="M194.67 58.46C194.67 48.34 186.46 40.13 176.33 40.13C175.44 40.13 174.56 40.21 173.7 40.34C170.4 27.94 159.11 18.79 145.67 18.79C139.45 18.79 133.7 20.76 128.97 24.09C127.17 10.93 115.89 0.79 102.23 0.79C91.91 0.79 82.94 6.59 78.39 15.11C73.39 11.56 67.27 9.46 60.67 9.46C48.19 9.46 37.47 16.91 32.68 27.6C30.29 26.61 27.67 26.05 24.91 26.05C13.74 26.05 4.69 35.11 4.69 46.28C4.69 48.05 4.94 49.77 5.37 51.42C2.5 53.76 0.67 57.33 0.67 61.33C0.67 68.4 6.4 74.13 13.46 74.13C14.87 74.13 16.21 73.89 17.47 73.48C19.65 80.27 26.02 85.2 33.54 85.2C37.71 85.2 41.52 83.67 44.47 81.16C48.7 84.16 53.86 85.93 59.43 85.93C64.26 85.93 68.78 84.6 72.65 82.3C74.6 83.78 77.03 84.66 79.67 84.66C82 84.66 84.16 83.97 85.99 82.79C89.28 88.34 95.31 92.08 102.23 92.08C109.02 92.08 114.96 88.48 118.29 83.11C121.2 85.79 125.07 87.44 129.34 87.44C134.7 87.44 139.44 84.85 142.42 80.87C146.23 86.64 152.78 90.46 160.22 90.46C169.46 90.46 177.3 84.58 180.27 76.36C188.5 74.56 194.67 67.23 194.67 58.46Z" />
          </g>
        </g>
      </svg>
      <div class="cloud-text">I en bog eller en film.</div>
    </div>
    <audio src="../../assets/sounds/session4/night-time.mp3" autoplay loop ref="audio"/>
    <audio src="../../assets/sounds/appendix/Session13_Appendix_Page2.mp3" ref="voice"/>
    <div class="page-number" id="page-light">223</div>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: "AppendixPage2",
  methods: {
    animateSvg() {
      let stars = document.querySelectorAll('.shp1');
      stars.forEach(star => {
        Math.random() < 0.1 ?
          anime({
            targets: star,
            delay: Math.random() * 1000,
            opacity: 0,
            direction: 'alternate',
            duration: Math.random() * 2000 + 1000,
            loop: true
          })
          : console.log();
      });
    },
    // animateElements() {
    //   let clouds = document.querySelectorAll('.cloud-container');
    //   let animation = anime.timeline({duration: 500,easing: 'linear'});
    //   animation
    //     .add({targets: '.title',opacity: 1}, 600)
    //     .add({targets: clouds[0],opacity: 1}, 6900)
    //     .add({targets: clouds[2],opacity: 1}, 9100)
    //     .add({targets: clouds[1],opacity: 1}, 12500)
    //     .add({targets: clouds[3],opacity: 1}, 15800)
    //     .add({targets: '.star-container',opacity: 1}, 18400)
    // },
    playVoiceOver() {
      setTimeout(() => {this.$refs.voice.play()}, 500)
    },
    setAudioVolumeLevel(level) {
      this.$refs.audio.volume = level
    }
  },
  mounted() {
    this.setAudioVolumeLevel(1);
    // this.animateElements();
    this.playVoiceOver();
  }
}
</script>

<style scoped>
.landscape {
  position: absolute;
  height: auto;
  width: 105vw;
}
.title {
  position: absolute;
  font-size: 4vh;
  font-weight: bold;
  width: 100%;
  text-align: center;
  top: 0;
  color: #ffffff;
  opacity: 1;
}
.cloud-container {
  position: absolute;
  width: 34%;
  height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 1;
}
.cloud {
  position: absolute;
  width: 100%;
  height: 100%;
}
.cloud-text {
  position: absolute;
  font-size: 4vh;
  line-height: 5vh;
  z-index: 10;
  margin-top: 3%;
  text-align: center;
}
#cloud-1 {
  top: 8%;
  left: 1%;
}
#cloud-2 {
  bottom: 8%;
  left: 1%;
}
#cloud-3 {
  top: 8%;
  right: 1%;
}
#cloud-4 {
  bottom: 8%;
  right: 1%;
}
.star-container {
  position: absolute;
  top: 15vh;
  left: 25%;
  width: 50%;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  opacity: 1;
}
.star {
  position: absolute;
  width: auto;
  height: 100%;
}
.star-text {
  position: absolute;
  margin-top: 0;
  font-size: 4vh;
  width: 100%;
  text-align: center;
}
.star-text p {
  margin-bottom: 0;
}
tspan { white-space:pre }
.shp0-cloud { fill: #ffffff }
.shp0-star { fill: #f3cc30 }
.shp1-star { fill: #f7db5e }
.shp2-star { fill: #edbd31 }
.shp0 { fill: url(#grd1) }
.shp1 { fill: #ffffff }
.shp2 { mix-blend-mode: overlay;fill: url(#grd2) }
.shp3 { mix-blend-mode: overlay;fill: url(#grd3) }
.shp4 { mix-blend-mode: overlay;fill: url(#grd4) }
.shp5 { mix-blend-mode: overlay;fill: url(#grd5) }
.shp6 { mix-blend-mode: overlay;fill: url(#grd6) }
.shp7 { mix-blend-mode: overlay;fill: url(#grd7) }
.shp8 { mix-blend-mode: overlay;fill: url(#grd8) }
.shp9 { mix-blend-mode: overlay;fill: url(#grd9) }
.shp10 { mix-blend-mode: overlay;fill: url(#grd10) }
.shp11 { mix-blend-mode: overlay;fill: url(#grd11) }
.shp12 { mix-blend-mode: overlay;fill: url(#grd12) }
.shp13 { mix-blend-mode: overlay;fill: url(#grd13) }
.shp14 { mix-blend-mode: overlay;fill: url(#grd14) }
.shp15 { mix-blend-mode: overlay;fill: url(#grd15) }
.shp16 { mix-blend-mode: overlay;fill: url(#grd16) }
.shp17 { mix-blend-mode: overlay;fill: url(#grd17) }
.shp18 { mix-blend-mode: overlay;fill: url(#grd18) }
.shp19 { mix-blend-mode: overlay;fill: url(#grd19) }
.shp20 { mix-blend-mode: overlay;fill: url(#grd20) }
.shp21 { mix-blend-mode: overlay;fill: url(#grd21) }
.shp22 { mix-blend-mode: overlay;fill: url(#grd22) }
.shp23 { mix-blend-mode: overlay;fill: url(#grd23) }
.shp24 { mix-blend-mode: overlay;fill: url(#grd24) }
.shp25 { mix-blend-mode: overlay;fill: url(#grd25) }
.shp26 { mix-blend-mode: overlay;fill: url(#grd26) }
.shp27 { mix-blend-mode: overlay;fill: url(#grd27) }
.shp28 { mix-blend-mode: overlay;fill: url(#grd28) }
.shp29 { mix-blend-mode: overlay;fill: url(#grd29) }
.shp30 { mix-blend-mode: overlay;fill: url(#grd30) }
.shp31 { mix-blend-mode: overlay;fill: url(#grd31) }
.shp32 { mix-blend-mode: overlay;fill: url(#grd32) }
.shp33 { mix-blend-mode: overlay;fill: url(#grd33) }
.shp34 { mix-blend-mode: overlay;fill: url(#grd34) }
.shp35 { mix-blend-mode: overlay;fill: url(#grd35) }
.shp36 { mix-blend-mode: overlay;fill: url(#grd36) }
.shp37 { mix-blend-mode: overlay;fill: url(#grd37) }
.shp38 { mix-blend-mode: overlay;fill: url(#grd38) }
.shp39 { mix-blend-mode: overlay;fill: url(#grd39) }
.shp40 { mix-blend-mode: overlay;fill: url(#grd40) }
.shp41 { mix-blend-mode: overlay;fill: url(#grd41) }
.shp42 { mix-blend-mode: overlay;fill: url(#grd42) }
.shp43 { mix-blend-mode: overlay;fill: url(#grd43) }
.shp44 { mix-blend-mode: overlay;fill: url(#grd44) }
.shp45 { mix-blend-mode: overlay;fill: url(#grd45) }
.shp46 { mix-blend-mode: overlay;fill: url(#grd46) }
.shp47 { mix-blend-mode: overlay;fill: url(#grd47) }
.shp48 { mix-blend-mode: overlay;fill: url(#grd48) }
.shp49 { mix-blend-mode: overlay;fill: url(#grd49) }
.shp50 { mix-blend-mode: overlay;fill: url(#grd50) }
.shp51 { mix-blend-mode: overlay;fill: url(#grd51) }
.shp52 { mix-blend-mode: overlay;fill: url(#grd52) }
.shp53 { mix-blend-mode: overlay;fill: url(#grd53) }
.shp54 { mix-blend-mode: overlay;fill: url(#grd54) }
.shp55 { mix-blend-mode: overlay;fill: url(#grd55) }
.shp56 { mix-blend-mode: overlay;fill: url(#grd56) }
.shp57 { mix-blend-mode: overlay;fill: url(#grd57) }
.shp58 { mix-blend-mode: overlay;fill: url(#grd58) }
.shp59 { mix-blend-mode: overlay;fill: url(#grd59) }
.shp60 { mix-blend-mode: overlay;fill: url(#grd60) }
.shp61 { mix-blend-mode: overlay;fill: url(#grd61) }
.shp62 { mix-blend-mode: overlay;fill: url(#grd62) }
.shp63 { mix-blend-mode: overlay;fill: url(#grd63) }
.shp64 { mix-blend-mode: overlay;fill: url(#grd64) }
.shp65 { mix-blend-mode: overlay;fill: url(#grd65) }
.shp66 { mix-blend-mode: overlay;fill: url(#grd66) }
.shp67 { mix-blend-mode: overlay;fill: url(#grd67) }
.shp68 { mix-blend-mode: overlay;fill: url(#grd68) }
.shp69 { mix-blend-mode: overlay;fill: url(#grd69) }
.shp70 { mix-blend-mode: overlay;fill: url(#grd70) }
.shp71 { mix-blend-mode: overlay;fill: url(#grd71) }
.shp72 { mix-blend-mode: overlay;fill: url(#grd72) }
.shp73 { mix-blend-mode: overlay;fill: url(#grd73) }
.shp74 { mix-blend-mode: overlay;fill: url(#grd74) }
.shp75 { mix-blend-mode: overlay;fill: url(#grd75) }
.shp76 { mix-blend-mode: overlay;fill: url(#grd76) }
.shp77 { mix-blend-mode: overlay;fill: url(#grd77) }
.shp78 { mix-blend-mode: overlay;fill: url(#grd78) }
.shp79 { mix-blend-mode: overlay;fill: url(#grd79) }
.shp80 { mix-blend-mode: overlay;fill: url(#grd80) }
.shp81 { mix-blend-mode: overlay;fill: url(#grd81) }
.shp82 { mix-blend-mode: overlay;fill: url(#grd82) }
.shp83 { mix-blend-mode: overlay;fill: url(#grd83) }
.shp84 { mix-blend-mode: overlay;fill: url(#grd84) }
.shp85 { mix-blend-mode: overlay;fill: url(#grd85) }
.shp86 { mix-blend-mode: overlay;fill: url(#grd86) }
.shp87 { mix-blend-mode: overlay;fill: url(#grd87) }
.shp88 { mix-blend-mode: overlay;fill: url(#grd88) }
.shp89 { mix-blend-mode: overlay;fill: url(#grd89) }
.shp90 { mix-blend-mode: overlay;fill: url(#grd90) }
.shp91 { mix-blend-mode: overlay;fill: url(#grd91) }
.shp92 { mix-blend-mode: overlay;fill: url(#grd92) }
.shp93 { mix-blend-mode: overlay;fill: url(#grd93) }
.shp94 { mix-blend-mode: overlay;fill: url(#grd94) }
.shp95 { mix-blend-mode: overlay;fill: url(#grd95) }
.shp96 { mix-blend-mode: overlay;fill: url(#grd96) }
.shp97 { mix-blend-mode: overlay;fill: url(#grd97) }
.shp98 { mix-blend-mode: overlay;fill: url(#grd98) }
.shp99 { mix-blend-mode: overlay;fill: url(#grd99) }
.shp100 { mix-blend-mode: overlay;fill: url(#grd100) }
.shp101 { mix-blend-mode: overlay;fill: url(#grd101) }
.shp102 { mix-blend-mode: overlay;fill: url(#grd102) }
.shp103 { mix-blend-mode: overlay;fill: url(#grd103) }
.shp104 { mix-blend-mode: overlay;fill: url(#grd104) }
.shp105 { mix-blend-mode: overlay;fill: url(#grd105) }
.shp106 { mix-blend-mode: overlay;fill: url(#grd106) }
.shp107 { mix-blend-mode: overlay;fill: url(#grd107) }
.shp108 { mix-blend-mode: overlay;fill: url(#grd108) }
.shp109 { mix-blend-mode: overlay;fill: url(#grd109) }
.shp110 { mix-blend-mode: overlay;fill: url(#grd110) }
.shp111 { mix-blend-mode: overlay;fill: url(#grd111) }
.shp112 { mix-blend-mode: overlay;fill: url(#grd112) }
.shp113 { mix-blend-mode: overlay;fill: url(#grd113) }
.shp114 { mix-blend-mode: overlay;fill: url(#grd114) }
.shp115 { mix-blend-mode: overlay;fill: url(#grd115) }
.shp116 { mix-blend-mode: overlay;fill: url(#grd116) }
.shp117 { mix-blend-mode: overlay;fill: url(#grd117) }
.shp118 { mix-blend-mode: overlay;fill: url(#grd118) }
.shp119 { mix-blend-mode: overlay;fill: url(#grd119) }
.shp120 { mix-blend-mode: overlay;fill: url(#grd120) }
.shp121 { mix-blend-mode: overlay;fill: url(#grd121) }
.shp122 { mix-blend-mode: overlay;fill: url(#grd122) }
.shp123 { mix-blend-mode: overlay;fill: url(#grd123) }
.shp124 { mix-blend-mode: overlay;fill: url(#grd124) }
.shp125 { mix-blend-mode: overlay;fill: url(#grd125) }
.shp126 { mix-blend-mode: overlay;fill: url(#grd126) }
.shp127 { mix-blend-mode: overlay;fill: url(#grd127) }
.shp128 { mix-blend-mode: overlay;fill: url(#grd128) }
.shp129 { mix-blend-mode: overlay;fill: url(#grd129) }
.shp130 { mix-blend-mode: overlay;fill: url(#grd130) }
.shp131 { mix-blend-mode: overlay;fill: url(#grd131) }
.shp132 { mix-blend-mode: overlay;fill: url(#grd132) }
.shp133 { mix-blend-mode: overlay;fill: url(#grd133) }
.shp134 { mix-blend-mode: overlay;fill: url(#grd134) }
.shp135 { mix-blend-mode: overlay;fill: url(#grd135) }
.shp136 { mix-blend-mode: overlay;fill: url(#grd136) }
.shp137 { mix-blend-mode: overlay;fill: url(#grd137) }
.shp138 { mix-blend-mode: overlay;fill: url(#grd138) }
.shp139 { mix-blend-mode: overlay;fill: url(#grd139) }
.shp140 { mix-blend-mode: overlay;fill: url(#grd140) }
.shp141 { mix-blend-mode: overlay;fill: url(#grd141) }
.shp142 { mix-blend-mode: overlay;fill: url(#grd142) }
.shp143 { mix-blend-mode: overlay;fill: url(#grd143) }
.shp144 { mix-blend-mode: overlay;fill: url(#grd144) }
.shp145 { mix-blend-mode: overlay;fill: url(#grd145) }
.shp146 { mix-blend-mode: overlay;fill: url(#grd146) }
.shp147 { mix-blend-mode: overlay;fill: url(#grd147) }
.shp148 { mix-blend-mode: overlay;fill: url(#grd148) }
.shp149 { mix-blend-mode: overlay;fill: url(#grd149) }
.shp150 { mix-blend-mode: overlay;fill: url(#grd150) }
.shp151 { mix-blend-mode: overlay;fill: url(#grd151) }
.shp152 { mix-blend-mode: overlay;fill: url(#grd152) }
.shp153 { mix-blend-mode: overlay;fill: url(#grd153) }
.shp154 { mix-blend-mode: overlay;fill: url(#grd154) }
.shp155 { mix-blend-mode: overlay;fill: url(#grd155) }
.shp156 { mix-blend-mode: overlay;fill: url(#grd156) }
.shp157 { mix-blend-mode: overlay;fill: url(#grd157) }
.shp158 { mix-blend-mode: overlay;fill: url(#grd158) }
.shp159 { mix-blend-mode: overlay;fill: url(#grd159) }
.shp160 { mix-blend-mode: overlay;fill: url(#grd160) }
.shp161 { mix-blend-mode: overlay;fill: url(#grd161) }
.shp162 { mix-blend-mode: overlay;fill: url(#grd162) }
.shp163 { mix-blend-mode: overlay;fill: url(#grd163) }
.shp164 { mix-blend-mode: overlay;fill: url(#grd164) }
.shp165 { mix-blend-mode: overlay;fill: url(#grd165) }
.shp166 { mix-blend-mode: overlay;fill: url(#grd166) }
.shp167 { mix-blend-mode: overlay;fill: url(#grd167) }
.shp168 { mix-blend-mode: overlay;fill: url(#grd168) }
.shp169 { mix-blend-mode: overlay;fill: url(#grd169) }
.shp170 { mix-blend-mode: overlay;fill: url(#grd170) }
.shp171 { mix-blend-mode: overlay;fill: url(#grd171) }
.shp172 { mix-blend-mode: overlay;fill: url(#grd172) }
.shp173 { mix-blend-mode: overlay;fill: url(#grd173) }
.shp174 { mix-blend-mode: overlay;fill: url(#grd174) }
.shp175 { mix-blend-mode: overlay;fill: url(#grd175) }
.shp176 { mix-blend-mode: overlay;fill: url(#grd176) }
.shp177 { mix-blend-mode: overlay;fill: url(#grd177) }
.shp178 { mix-blend-mode: overlay;fill: url(#grd178) }
.shp179 { mix-blend-mode: overlay;fill: url(#grd179) }
.shp180 { mix-blend-mode: overlay;fill: url(#grd180) }
.shp181 { mix-blend-mode: overlay;fill: url(#grd181) }
.shp182 { mix-blend-mode: overlay;fill: url(#grd182) }
.shp183 { mix-blend-mode: overlay;fill: url(#grd183) }
.shp184 { mix-blend-mode: overlay;fill: url(#grd184) }
.shp185 { mix-blend-mode: overlay;fill: url(#grd185) }
.shp186 { mix-blend-mode: overlay;fill: url(#grd186) }
.shp187 { mix-blend-mode: overlay;fill: url(#grd187) }
.shp188 { mix-blend-mode: overlay;fill: url(#grd188) }
.shp189 { mix-blend-mode: overlay;fill: url(#grd189) }
.shp190 { mix-blend-mode: overlay;fill: url(#grd190) }
.shp191 { mix-blend-mode: overlay;fill: url(#grd191) }
.shp192 { mix-blend-mode: overlay;fill: url(#grd192) }
.shp193 { mix-blend-mode: overlay;fill: url(#grd193) }
.shp194 { mix-blend-mode: overlay;fill: url(#grd194) }
.shp195 { mix-blend-mode: overlay;fill: url(#grd195) }
.shp196 { mix-blend-mode: overlay;fill: url(#grd196) }
.shp197 { mix-blend-mode: overlay;fill: url(#grd197) }
.shp198 { mix-blend-mode: overlay;fill: url(#grd198) }
.shp199 { mix-blend-mode: overlay;fill: url(#grd199) }
.shp200 { mix-blend-mode: overlay;fill: url(#grd200) }
.shp201 { mix-blend-mode: overlay;fill: url(#grd201) }
.shp202 { mix-blend-mode: overlay;fill: url(#grd202) }
.shp203 { mix-blend-mode: overlay;fill: url(#grd203) }
.shp204 { mix-blend-mode: overlay;fill: url(#grd204) }
.shp205 { mix-blend-mode: overlay;fill: url(#grd205) }
.shp206 { mix-blend-mode: overlay;fill: url(#grd206) }
.shp207 { mix-blend-mode: overlay;fill: url(#grd207) }
.shp208 { mix-blend-mode: overlay;fill: url(#grd208) }
.shp209 { mix-blend-mode: overlay;fill: url(#grd209) }
.shp210 { opacity: 0.702;fill: url(#grd210) }
.shp211 { opacity: 0.2;fill: url(#grd211) }
.shp212 { opacity: 0.2;fill: url(#grd212) }
</style>