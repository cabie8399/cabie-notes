from PyQt6 import QtWidgets
import sys

class MyWidget(QtWidgets.QWidget):
    def __init__(self):
        super().__init__()
        self.setWindowTitle('oxxo.studio')      # 設定標題
        self.resize(320, 240)                   # 設定長寬尺寸
        self.setStyleSheet('background:#fcc;')  # 使用網頁 CSS 樣式設定背景
        print(self.width())                     # 印出寬度
        print(self.height())                    # 印出高度

if __name__ == '__main__':
    app = QtWidgets.QApplication(sys.argv)
    Form = MyWidget()
    Form.show()
    sys.exit(app.exec())