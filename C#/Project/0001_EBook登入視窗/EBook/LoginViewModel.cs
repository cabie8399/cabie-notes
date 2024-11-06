using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EBook
{
    public class LoginViewModel:INotifyPropertyChanged
    {
        public event PropertyChangedEventHandler PropertyChanged;
        private void RaisePropertyChanged(string propertyName)
        {
            PropertyChangedEventHandler handler = PropertyChanged;
            if (handler != null) handler(this, new PropertyChangedEventArgs(propertyName));
        }

        // 因為同一個namespace所以可以直接用LoginModel
        // 下面Acc跟Pwd實際用的值都是來自Model那層(LoginModel)
        private LoginModel _LoginM = new LoginModel();

        public string Acc
        {
            get { return _LoginM.Acc; }
            set 
            { 
                _LoginM.Acc = value;
                RaisePropertyChanged(nameof(Acc));
            }
        }

        public string Pwd
        {
            get { return _LoginM.Pwd; }
            set
            {
                _LoginM.Pwd = value;
                RaisePropertyChanged(nameof(Pwd));
            }
        }
    }
}
