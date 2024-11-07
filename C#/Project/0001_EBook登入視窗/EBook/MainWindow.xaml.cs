using System.ComponentModel;
using System.Diagnostics;
using System.Text;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;

namespace EBook
{
    public partial class MainWindow : Window
    {   
        public MainWindow()
        {
            InitializeComponent();
            // 這樣寫後，View這層就可以去存取ViewModel那層的屬性
            this.DataContext = new LoginViewModel(this);
        }

        // 忘記密碼 超連結
        private void Hyperlink_Click(object sender, RoutedEventArgs e)
        {

        }
    }
}