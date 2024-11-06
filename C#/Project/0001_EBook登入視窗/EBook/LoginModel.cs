using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EBook
{
    public class LoginModel
    {
        private string _Acc;
        public string Acc
        {
            get { return _Acc; }
            set
            {
                _Acc = value;
            }
        }

        private string _Pwd;
        public string Pwd
        {
            get { return _Pwd; }
            set
            {
                _Pwd = value;
            }
        }
    }
}
